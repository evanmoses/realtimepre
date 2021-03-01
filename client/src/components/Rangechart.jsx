import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {useStateWithCallbackLazy} from 'use-state-with-callback';
import combos from '../lib/combos.jsx';
import ActionRandomizer from './ActionRandomizer.jsx';

function Rangechart(props) {
  const [randomizerDelay, setRandomizerDelay] =  useState(null);
  const [showRandomizer, setShowRandomizer] = useStateWithCallbackLazy(false);
  const [randomNum, setRandomNum] = useState(Math.ceil(Math.random() * 100))
  const [action, setAction] = useState('');

  const handleComboClick = () => {
    if (!showRandomizer) {
      setAction(decideAction());
      setShowRandomizer(true, () => {
        setRandomizerDelay(setTimeout(() => {
          setShowRandomizer(false);
          setRandomNum(Math.ceil(Math.random() * 100));
        }, 5000))
      });
    }
    if (showRandomizer) {
      setShowRandomizer(false);
      setRandomNum(Math.ceil(Math.random() * 100));
      clearTimeout(randomizerDelay);
    }
  }

  const decideAction = () => {
    const thisBetRange = props.range.betRange[props.currentCombo];
    var a = thisBetRange.foldFreq;
    var b = thisBetRange.callFreq;
    var c = thisBetRange.raise;


    if (!a && !b && !c) {
      return 'N/A';
    }
    if (a === undefined) { a=0 };
    if (b === undefined) { b=0 };
    if (a > randomNum) {
      return 'FOLD';
    }
    if (a+b > randomNum) {
      return 'CALL';
    }
    else {
      const freqArray = c.map(x => a+b+x.freq)
      const totalFreqArray = freqArray.map((elem, index) => {
        return freqArray.slice(0,index + 1).reduce((a,b) => a+b);
      });
      const actionIndex = totalFreqArray.findIndex((n) => n > randomNum);
      return <div>RAISE<br/>{c[actionIndex].size} BB</div>
    }
  }

  const handleMouseEnter = (e, index) => {
    const currentComboIndex = index;
    props.setCombo(currentComboIndex);
  }

  const fillSquares = (i) => {
    if (props.range === null) {
      return <FreqFill />;
    }
    const x = props.range.betRange[i]
    let y = []
    x.raise ? y = x.raise : y = null;
    return (
      <FreqFill>
        {y[3] ? <Freq color="#d1b684" height={`${y[3].freq/100*30}px`} /> : null}
        {y[2] ? <Freq color="#d19184" height={`${y[2].freq/100*30}px`} /> : null}
        {y[1] ? <Freq color="#d184ce" height={`${y[1].freq/100*30}px`} /> : null}
        {y[0] ? <Freq color="#a484d1" height={`${y[0].freq/100*30}px`} /> : null}
        {x.callFreq ? <Freq color="#aecf84" height={`${x.callFreq/100*30}px`} /> : null}
        {x.foldFreq ? <Freq color="#85c2c9" height={`${x.foldFreq/100*30}px`} /> : null}
      </FreqFill>
    )
  }

  return (
    <RangeBox>
      <RangeContainer>
        {combos.map((combo, index) => {
          return (
            <ComboSquare
              key={combo}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
              onClick={handleComboClick}
            >
              <ComboText><div>{combo}</div></ComboText>
              {fillSquares(index)}
            </ComboSquare>
          )
        })}
      </RangeContainer>
      {showRandomizer && <ActionRandomizer
        action={action}
        randomNum={randomNum}
        handleComboClick={handleComboClick}
      />}
    </RangeBox>
  );
}

const RangeBox = styled.div`
  background-color: #414141;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
;`

const RangeContainer = styled.div`
  display: flex;
  width: 391px;
  height: 391px;
  flex-wrap: wrap;
  border-top: 1px solid #d4d4d4;
  border-left: 1px solid #d4d4d4;
  background-color: #525252;
;`

const ComboSquare = styled.div`
  width: 30px;
  height: 30px;
  border-right: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  user-select: none;
;`

const FreqFill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: flex-end;
;`

const Freq = styled.div`
  width: 100%;
  background-color: ${({color}) => color};
  height: ${({height}) => height};
;`

const ComboText = styled.div`
  position: relative;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 15px;
    right: 0;
    bottom: 0;
  }
;`

export default Rangechart;
