import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import Testlink from './components/Testlink.jsx'
import Rangechart from './components/Rangechart.jsx'
import Dash from './components/Dash.jsx'

function App() {
  //toggle two main app modes 'create range' and 'display range'
  const [displayActive, setDisplay] = useState(true);

  const handleDisplayClick = event => {
    const value = (event.target.value === "true")
    setDisplay(value);
  }

  //manage state of radio butotns to select range scenario
  const [heroPosition, setHeroPosition] = useState('BB');
  const [villainPosition, setVillainPosition] = useState('BTN');
  const [facingAction, setFacingAction] = useState('N/A');

  const handleHeroChange = event => {
    const value = event.target.value;
    setHeroPosition(value);
  }

  const handleVillainChange = event => {
    const value = event.target.value;
    setVillainPosition(value);
  }

  const handleActionChange = event => {
    const value = event.target.value;
    setFacingAction(value);
  }

  // manage state of range pulled from database
  const [range, setRange] = useState(null);

  const getRange = useCallback(async () => {
    const source = axios.CancelToken.source();
    try {
      const response = await axios.get('http://localhost:9000/ranges', {params: {
        heroPos : heroPosition,
        vilPos : villainPosition,
        facing: facingAction,
        stackDepth: 100
      }}, {cancelToken: source.token});
      const rangeResponse = await response.data;
      setRange(rangeResponse);
    } catch (error) {
      console.log(error);
    }
    return () => source.cancel('axios request cancelled');
  }, [heroPosition, villainPosition, facingAction]);

  useEffect(() => {
    getRange();
  }, [getRange]);

  return (
    <MainContainer>
      <AppRow>
        <ButtonLabel>
          <DispButton type='radio' name='radio' value='true' checked={displayActive===true} onChange={handleDisplayClick} />
          <span>Display Range</span>
        </ButtonLabel>
        <ButtonLabel>
          <DispButton type='radio'  name='radio' value='false' checked={displayActive===false} onChange={handleDisplayClick} />
          <span>Create Range</span>
        </ButtonLabel>
      </AppRow>
      <AppRow>
        <Rangechart
          displayActive={displayActive}
          heroPosition={heroPosition}
          villainPosition={villainPosition}
          facingAction={facingAction}
          handleHeroChange={handleHeroChange}
          handleVillainChange={handleVillainChange}
          handleActionChange={handleActionChange}
          range={range}
        />
        <Dash
          displayActive={displayActive}
          heroPosition={heroPosition}
          villainPosition={villainPosition}
          facingAction={facingAction}
          handleHeroChange={handleHeroChange}
          handleVillainChange={handleVillainChange}
          handleActionChange={handleActionChange}
          range={range}
        />
      </AppRow>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  /* stylelint-disable */
  text-align: center;
  padding: 10px;
  color: #d4d4d4;
`;

const AppRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonLabel = styled.label`
  & > span {
    display: inline-block;
    border: 1px solid #d4d4d4;
    margin: 0;
    height: 30px;
    width: 150px;
    line-height: 30px;
    text-align: center;

    @media (max-width: 420px) {
      width: 45px;
    }
  }

  &:hover > span,
  &:active > span,
  &:focus > span
  &:checked {
    background-color: #702227;
    border: 1px solid #d4d4d4;
  }
`;

const DispButton = styled.input`
  display: none;

  &:checked + span {
    background-color: #702227;
    border: 1px solid #d4d4d4;
  }
`;

export default App;
