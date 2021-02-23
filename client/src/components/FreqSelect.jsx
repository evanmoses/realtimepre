import React from 'react';
import styled from 'styled-components/macro';

function FreqSelect() {
  return (
    <SelectContainer>
      <FreqButtonRow>
        <div className="freq-input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton style={{backgroundColor: "#85c2c9"}}>FOLD</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow>
        <div className="freq-input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton style={{backgroundColor: "#aecf84"}}>CALL</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow>
        <div className="freq=input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton style={{backgroundColor: "#d184ce"}}>RAISE</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow style={{marginTop: "15px"}}>
        <ControlButton>LOAD</ControlButton>
        <ControlButton>EDIT</ControlButton>
      </FreqButtonRow>
      <FreqButtonRow>
        <ControlButton style={{width: '120px'}}>SUBMIT</ControlButton>
      </FreqButtonRow>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  width: 40%;
;`

const FreqButtonRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
;`

const FreqButton = styled.div`
  user-select: none;
  font-size: 14px;
  padding: 3px 0;
  font-weight: 500;
  width: 50px;
  border-radius: 5px;
;`

const ControlButton = styled.div`
  user-select: none;
  font-size: 14px;
  padding: 3px 0;
  font-weight: 500;
  width: 50px;
  border-radius: 5px;

  background-color: #414141;

  &:hover,
  &:active {
    background-color: #525252;
  }
;`




export default FreqSelect;
