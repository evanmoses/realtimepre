import React from 'react';
import styled from 'styled-components/macro';

function FreqSelect(props) {
  return (
    <SelectContainer>
      <FreqButtonRow>
        <div>
          <FreqInput type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton color="#85c2c9">FOLD</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow>
        <div>
          <FreqInput type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton color="#aecf84">CALL</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow color="#a484d1">
        <div>
          <FreqInput type="text" placeholder="100"/><span>%</span>
        </div>
        <FreqButton color="#a484d1">RAISE</FreqButton>
      </FreqButtonRow>
      <FreqButtonRow style={{marginTop: "15px"}}>
        <ControlButton onClick={props.handleLoadClick}>LOAD</ControlButton>
        <ControlButton>EDIT</ControlButton>
      </FreqButtonRow>
      <FreqButtonRow>
        <SubmitButton>SUBMIT</SubmitButton>
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

const ControlButton = styled.div`
  user-select: none;
  font-size: 14px;
  padding: 3px 0;
  font-weight: 500;
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #414141;

  &:hover,
  &:active {
    background-color: #525252;
  }
;`

const SubmitButton = styled(ControlButton)`
  width: 122px;
;`

const FreqButton = styled(ControlButton)`
  border: 1px solid ${({color}) => color};
  background-color: transparent;

  &:hover,
  &:active {
    background-color: ${({color}) => color};
  }
;`

const FreqInput = styled.input`
  font-size: 18px;
  width: 40px;
  background-color: #414141;
  color: #d4d4d4;
  text-align: center;
  border-radius: 3px;

  &:focus {
    background-color: #414141;
    box-shadow: 0 0 0 2px #525252;
  }

  &::placeholder {
    color: #d4d4d4;
  }
;`

export default FreqSelect;
