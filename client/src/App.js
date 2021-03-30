import React, { useState, useEffect, useCallback} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import styled from 'styled-components/macro';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import withReactContent from 'sweetalert2-react-content';

import Rangechart from './components/Rangechart.jsx';
import Dash from './components/Dash.jsx';

import AlertModal from './lib/AlertModal.js';
import './lib/AlertModal.scss'
import defaultRange from './lib/combos.jsx';

const MySwal = withReactContent(AlertModal);

function App() {
  //toggle two main app modes 'create range' and 'display range'
  const [displayActive, setDisplay] = useState(true);

  const handleDisplayClick = event => {
    const value = (event.target.value === "true")
    setDisplay(value);
  }

  // track current combo being hovered on rangechart
  const [currentCombo, setCombo] = useStateWithCallbackLazy(0);

  //manage state of radio butotns to select range scenario
  const [heroPosition, setHeroPosition] = useState('BB');
  const [villainPosition, setVillainPosition] = useState('BTN');
  const [facingAction, setFacingAction] = useState('N/A');
  const [selectedRange, setSelectedRange] = useState(['BB', 'BTN', 'N/A']);

  // fetch new range based on value of radio selector buttons
  const updateRange = (a, b, c) => {
    setSelectedRange([a,b,c]);
  }

  // change handlers for radio selectors, trigger updateRange()
  // conditionally on display state
  const handleHeroChange = event => {
    const value = event.target.value;
    setHeroPosition(value);
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
  const [range, setRange] = useState(defaultRange);

  const getRange = useCallback(async () => {
    const source = axios.CancelToken.source();
    try {
      const response = await axios.get('https://evanmoses.com/realtimepre/backend/ranges', {params: {
        heroPos : selectedRange[0],
        vilPos : selectedRange[1],
        facing: selectedRange[2],
        stackDepth: 100
      }}, {cancelToken: source.token});
      const rangeResponse = await response.data;
      if (rangeResponse === null) {
        return setRange(defaultRange)
      }
      setRange(rangeResponse);
    } catch (error) {
      console.log(error);
    }
    return () => source.cancel('axios request cancelled');
  }, [selectedRange]);

  // load range from db to edit in create range mode
  const handleLoadClick = event => {
    updateRange(heroPosition, villainPosition, facingAction);
  }

  // reset range to empty in create range mode
  const handleResetClick = event => {
    let resetRange = defaultRange;
    resetRange.heroPos = heroPosition;
    resetRange.vilPos = villainPosition;
    resetRange.facing = facingAction;
    pushSelectedToRange(resetRange);
  }

  const handleSubmitClick = () => {
    MySwal.fire({
      title: 'Enter password to post range',
      input: 'password',
      confirmButtonText: 'Submit',
      showCancelButton: true,
      reverseButtons: true,
      preConfirm: (value) => {
        if (value !== process.env.REACT_APP_POST_PASS) {
          MySwal.showValidationMessage('Incorrect Password')
        } else {
          checkForRange();
        }
      }
    });
  };

  const checkForRange = async () => {
    const source = axios.CancelToken.source();
    try {
      const response = await axios.get('https://evanmoses.com/realtimepre/backend/ranges', {params: {
        heroPos : heroPosition,
        vilPos : villainPosition,
        facing: facingAction,
        stackDepth: 100,
      }}, {cancelToken: source.token});
      if (response.data !== null) {
        return MySwal.fire({
          title: 'Range for this scenario already exists, press confirm to overwrite',
          showCancelButton: true,
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            postRange();
          } else if (result.isDismissed) {
            MySwal.fire({
              title: 'Range not Posted',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        });
      } else {
        postRange();
      }
    } catch (error) {
      console.log(error);
    }
    return () => source.cancel('axios request cancelled');
  };

  const postRange = async () => {
    const source = axios.CancelToken.source();
    try {
      const response = await axios.post('https://evanmoses.com/realtimepre/backend/ranges', {
        heroPos: heroPosition,
        vilPos: villainPosition,
        facing: facingAction,
        stackDepth: 100,
        betRange: range.betRange,
      }, {cancelToken: source.token});
      const didPost = await response.status;
      console.log(didPost);
      didPost === 200 && MySwal.fire({
        title: 'Nice!',
        text: 'Range has been posted to Database',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }
    catch (error){
      MySwal.fire({
        title: 'Error Posting to Database',
        text: 'Please try again later',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      console.log(error);
    }
    return () => source.cancel('axios request cancelled');
  }

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
  const [renderTrigger, setRenderTrigger] = useState(false);
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
      return MySwal.fire(<div>No Action Selected</div>)
        .then(setMouseDown(false));
    }
    const freqPickerToNum = freqPicker.map(x => {
      return parseInt(x || 0);
    });
    const sizePickerToNum = sizePicker.map(x => {
      return parseFloat(x || 0);
    })
    if (freqPickerToNum.reduce((a,b) => a+b) === 0) {
      return MySwal.fire(<div>No Frequency Selected</div>)
        .then(setMouseDown(false));
    }
    if (freqPickerToNum.reduce((a,b) => a+b) > 100) {
      return MySwal.fire(<div>Total Frequency Greater Than 100</div>)
        .then(setMouseDown(false));
    }
    const raiseArray = freqPickerToNum.slice(2);
    const thisCombo = cloneDeep(range.betRange[combo]);
    foldPicker ?
      thisCombo.foldFreq = freqPickerToNum[0] || 0 :
      thisCombo.foldFreq = 0;
    callPicker ? thisCombo.callFreq = freqPickerToNum[1] || 0 :
      thisCombo.callFreq = 0;
    if (raisePicker) {
      thisCombo.raise = [{freq: 0, size: 0}];
      raiseArray.forEach(async (element, index) => {
        if (raiseArray[index] !== 0) {
          return thisCombo.raise[index] = {freq: raiseArray[index], size: sizePickerToNum[index]};
        }
      })
    } else {
      thisCombo.raise = [{freq: 0, size: 0}]
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

    const newRange = cloneDeep(range);
    newRange.betRange[combo] = thisCombo;
    setRenderTrigger(prevState => !prevState);
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
          handleResetClick={handleResetClick}
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
