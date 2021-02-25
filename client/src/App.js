import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import Testlink from './components/Testlink.jsx'
import Rangechart from './components/Rangechart.jsx'
import Dash from './components/Dash.jsx'

function App() {

  const [displayActive, setDisplay] = useState(true);

  const handleDisplayClick = event => {
    const value = (event.target.value === "true")
    setDisplay(value);
  }

  const [ranges, setRange] = useState([]);

  useEffect(() => {
    async function getRange() {
      try {
        const response = await axios.get('http://localhost:9000/ranges');
        setRange(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getRange();
  }, []);

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
        <Rangechart displayActive={displayActive} />
        <Dash displayActive={displayActive} />
      </AppRow>
      {ranges.map((range,index) => {
        return (
          <div key={range._id}>
            <span>{range.betRange[index].hand}</span>
          </div>
        )
      })}
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
