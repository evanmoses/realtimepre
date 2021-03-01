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

  // track current combo being hovered on rangechart
  const [currentCombo, setCombo] = useState(null);

  //manage state of radio butotns to select range scenario
  const [heroPosition, setHeroPosition] = useState('BB');
  const [villainPosition, setVillainPosition] = useState('BTN');
  const [facingAction, setFacingAction] = useState('N/A');
  const [selectedRange, setSelectedRange] = useState(['BB', 'BTN', 'N/A'])

  // fetch new range based on value of radio selector buttons
  const updateRange = (a, b, c) => {
    setSelectedRange([a,b,c]);
  }

  // load range from db to edit in create range mode
  const handleLoadClick = event => {
    updateRange(heroPosition, villainPosition, facingAction);
  }

  // change handlers for radio selectors, trigger updateRange()
  // conditionally on display state
  const handleHeroChange = event => {
    const value = event.target.value;
    setHeroPosition(value);
    console.log(value);
    displayActive && updateRange(value, villainPosition, facingAction);
  }

  const handleVillainChange = event => {
    const value = event.target.value;
    setVillainPosition(value);
    displayActive && updateRange(heroPosition, value, facingAction);
  }

  const handleActionChange = event => {
    const value = event.target.value;
    setFacingAction(value);
    displayActive && updateRange(heroPosition, villainPosition, value);
  }

  // manage state of range pulled from database
  const [range, setRange] = useState(null);

  const getRange = useCallback(async () => {
    const source = axios.CancelToken.source();
    try {
      const response = await axios.get('http://localhost:9000/ranges', {params: {
        heroPos : selectedRange[0],
        vilPos : selectedRange[1],
        facing: selectedRange[2],
        stackDepth: 100
      }}, {cancelToken: source.token});
      const rangeResponse = await response.data;
      setRange(rangeResponse);
    } catch (error) {
      console.log(error);
    }
    return () => source.cancel('axios request cancelled');
  }, [selectedRange]);

  useEffect(() => {
    getRange();
  }, [getRange]);

  // manage state state of frequency buttons when creating new range
  const [foldPicker, setFoldPicker] = useState(false);
  const [callPicker, setCallPicker] = useState(false);
  const [raisePicker, setRaisePicker] = useState(false);
  const [freqPicker, setFreqPicker] = useState([100,0,12,19,46,80]);
  const [sizePicker, setSizePicker] = useState([3,10,20,30]);

  const handleFreqInput = event => {
    console.log(freqPicker);
  }

  const handleFoldClick = event => {
    setFoldPicker(prevCheck => !prevCheck);
  }

  const handleCallClick = event => {
    setCallPicker(prevCheck => !prevCheck);
  }

  const handleRaiseClick = event => {
    setRaisePicker(prevCheck => !prevCheck);
  }

  const handleFreqChange = (event, index) => {
    const newFreq = event.target.value;
    let newArr = [...freqPicker];
    newArr[index] = newFreq;
    setFreqPicker(newArr);
    console.log(freqPicker);
  }

  const handleSizeChange = (event, index) => {
    const newFreq = event.target.value;
    let newArr = [...sizePicker];
    newArr[index] = newFreq;
    setSizePicker(newArr);
    console.log(sizePicker);
  }

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
          range={range}
          currentCombo={currentCombo}
          setCombo={setCombo}
          displayActive={displayActive}
          handleFreqInput={handleFreqInput}
        />
        <Dash
          range={range}
          currentCombo={currentCombo}
          displayActive={displayActive}

          heroPosition={heroPosition}
          villainPosition={villainPosition}
          facingAction={facingAction}

          handleHeroChange={handleHeroChange}
          handleVillainChange={handleVillainChange}
          handleActionChange={handleActionChange}

          handleLoadClick={handleLoadClick}

          foldPicker={foldPicker}
          callPicker={callPicker}
          raisePicker={raisePicker}
          freqPicker={freqPicker}
          sizePicker={sizePicker}
          handleFoldClick={handleFoldClick}
          handleCallClick={handleCallClick}
          handleRaiseClick={handleRaiseClick}
          handleFreqChange={handleFreqChange}
          handleSizeChange={handleSizeChange}
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
