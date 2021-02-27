import React, {useState} from 'react';
import styled from 'styled-components/macro';



function ActionRandomizer(props) {

  return (
    <FreqRandom onClick={props.handleComboClick}>
      <RandomNum{...props}>{props.randomNum}</RandomNum>
      <FreqAction{...props}>{props.action}</FreqAction>
    </FreqRandom>
  );
}

const handleTextColor = (color) => {
  if (color === 'FOLD') {
    return '#85c2c9';
  }
  if (color === 'CALL') {
    return "#aecf84";
  }
  if (color === 'N/A') {
    return '#dfdfdf'
  }
  return "#d184ce";
}

const FreqRandom = styled.div`
  background-color: rgba(64, 64, 64, 0.8);
  padding: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
;`

const RandomNum = styled.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: ${props => handleTextColor(props.action)};
;`

const FreqAction = styled.div`
  font-size: 25px;
  font-weight: 500;
  line-height: 25px;
  color: ${props => handleTextColor(props.action)};
;`

export default ActionRandomizer;
