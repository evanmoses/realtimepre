import React, { useState, useEffect, useCallback} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import styled from 'styled-components/macro';
import {useStateWithCallbackLazy} from 'use-state-with-callback';

import Rangechart from './components/Rangechart.jsx';
import Dash from './components/Dash.jsx';
import PostPopUp from './components/PostPopUp.jsx';

function App() {
  //toggle two main app modes 'create range' and 'display range'
  const [displayActive, setDisplay] = useState(true);

  const handleDisplayClick = event => {
    const value = (event.target.value === "true")
    setDisplay(value);
  }

  // track current combo being hovered on rangechart
  const [currentCombo, setCombo] = useStateWithCallbackLazy(null);

  //manage state of radio butotns to select range scenario
  const [heroPosition, setHeroPosition] = useState('BB');
  const [villainPosition, setVillainPosition] = useState('BTN');
  const [facingAction, setFacingAction] = useState('N/A');
  const [selectedRange, setSelectedRange] = useState(['BB', 'BTN', 'N/A']);

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

  // manage state of range pulled from database / edited by user
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
  }, [selectedRange, displayActive]);


  const [postMessage, setPostMessage] = useState('');

  const handleSubmitClick = () => {
    setPostMessage('login');
  };

  const postRange = () => {
    setPostMessage('confirm');
  };

  // const postRange = useCallback( async () => {
  //   try {
  //     setPostMessage('password');
  //     const pass =
  //     process.env.REACT_APP_POST_PASS;
  //   }
  // }, [])

  const pushSelectedToRange = useCallback(async (newRange) => {
    await setRange(newRange);
  }, []);

  useEffect(() => {
    getRange()
  }, [getRange, pushSelectedToRange]);


  // manage state state of frequency buttons when creating new range
  const [foldPicker, setFoldPicker] = useState(false);
  const [callPicker, setCallPicker] = useState(false);
  const [raisePicker, setRaisePicker] = useState(false);
  const [freqPicker, setFreqPicker] = useState([100,0,0,0,0,0]);
  const [sizePicker, setSizePicker] = useState([3,0,0,0]);
  const [renderToggle, setRenderToggle] = useState(false);
  const [isMouseDown, setMouseDown] = useState(false);


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
  }

  const handleSizeChange = (event, index) => {
    const newSize = event.target.value;
    let newArr = [...sizePicker];
    newArr[index] = newSize;
    setSizePicker(newArr);
  }

  const handleFreqInput = combo => {
    if (!foldPicker & !callPicker & !raisePicker) {
      return alert('No action selected');
    }
    const freqPickerToNum = freqPicker.map(x => {
      return parseInt(x || 0);
    });
    const sizePickerToNum = sizePicker.map(x => {
      return parseFloat(x || 0);
    })
    if (freqPickerToNum.reduce((a,b) => a+b) === 0) {
      return alert('No frequency selected');
    }
    if (freqPickerToNum.reduce((a,b) => a+b) > 100) {
      return alert('Total Frequency greater than 100');
    }
    console.log(sizePickerToNum);
    const raiseArray = freqPickerToNum.slice(2);
    const thisCombo = cloneDeep(range.betRange[combo]);
    if (foldPicker) thisCombo.foldFreq = freqPickerToNum[0] || 0;
    if (callPicker) thisCombo.callFreq = freqPickerToNum[1] || 0;
    if (raisePicker) {
      raiseArray.forEach((element, index) => {
        if (raiseArray[index] !== 0) {
          return thisCombo.raise[index] = {freq: raiseArray[index], size: sizePickerToNum[index]};
        }
      });
    }

    const compareObjects = (a, b) => {
      if (a === b) return true;

      if (typeof a != 'object' || typeof b != 'object' || a == null || b == null) return false;

      let keysA = Object.keys(a), keysB = Object.keys(b);

      if (keysA.length != keysB.length) return false;

      for (let key of keysA) {
        if (!keysB.includes(key)) return false;

        if (typeof a[key] === 'function' || typeof b[key] === 'function') {
          if (a[key].toString() != b[key].toString()) return false;
        } else {
          if (!compareObjects(a[key], b[key])) return false;
        }
      }

      return true;
    }

    if (compareObjects(thisCombo, range.betRange[combo])) {
      thisCombo.foldFreq = 0;
      thisCombo.callFreq = 0;
      thisCombo.raise = {freq: 0, size:0}
    }

    const newRange = range;
    newRange.betRange[combo] = thisCombo;
    setRenderToggle(!renderToggle);
    pushSelectedToRange(newRange);
  }

  const handleMouseUp = () => {
    setMouseDown(false);
  }

  return (
    <MainContainer onMouseUp={handleMouseUp}>
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
          isMouseDown={isMouseDown}
          setMouseDown={setMouseDown}
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
          handleSubmitClick={handleSubmitClick}
        />
      </AppRow>
      {!postMessage ? null : <PostPopUp postMessage={postMessage} postRange={postRange} setPostMessage={setPostMessage}/>}
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
