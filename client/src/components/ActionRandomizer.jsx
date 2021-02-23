import React from 'react';
import styles from 'styled-components/macro';

function ActionRandomizer(props) {
  const rollFreq = () => Math.ceil(Math.random() * 100);

  return (
    <FreqRandom{...props}>
      <RandomNum{...props}>{rollFreq()}</RandomNum>
      <FreqAction{...props}>{props.action}</FreqAction>
    </FreqRandom>
  );
}

const handleTextColor = color => {
  if (color === 'FOLD') {
    return '#85c2c9';
  } else if (color === 'CALL') {
    return "#aecf84";
  }
  return "#d184ce";
}

const FreqRandom = styles.div`
  background-color: rgba(64, 64, 64, 0.8);
  width: 110px;
  height: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
;`

const RandomNum = styles.div`
  font-size: 50px;
  font-weight: 500;
  line-height: 50px;
  color: ${props => handleTextColor(props.action)};
;`


const FreqAction = styles.div`
  font-size: 25px;
  font-weight: 500;
  line-height: 25px;
  color: ${props => handleTextColor(props.action)};
;`





export default ActionRandomizer;
