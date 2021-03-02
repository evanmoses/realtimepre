import React from 'react';
import styled from 'styled-components/macro';
import SingleBar from './SingleBar.jsx'

function FreqSelect(props) {

  return (
    <SelectContainer>
      <SelectButtonContainer>
        <FreqButtonRow>
          <FreqButton color="#85c2c9" onClick={props.handleFoldClick} className={props.foldPicker && 'active'}>FOLD</FreqButton>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[0]}  onChange={event => props.handleFreqChange(event, 0)} /><span>%</span>
          </InputContainer>
          <FreqButton style={{marginLeft: "20px"}} color="#aecf84" onClick={props.handleCallClick} className={props.callPicker && 'active'}>CALL</FreqButton>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[1]} onChange={event => props.handleFreqChange(event, 1)}/><span>%</span>
          </InputContainer>
        </FreqButtonRow>
        <FreqButtonRow style={{marginTop: "15px"}}>
            <FreqButton color="#a484d1" onClick={props.handleRaiseClick} className={props.raisePicker && 'active'}>RAISE</FreqButton>
            <RaiseText>Raise size, smallest to largest</RaiseText>
        </FreqButtonRow>

        <FreqButtonRow>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[2]} onChange={event => props.handleFreqChange(event, 2)}/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[3]} onChange={event => props.handleFreqChange(event, 3)}/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[4]} onChange={event => props.handleFreqChange(event, 4)}/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.freqPicker[5]} onChange={event => props.handleFreqChange(event, 5)}/><span>%</span>
          </InputContainer>
        </FreqButtonRow>

        <FreqButtonRow>
          <InputContainer>
            <FreqInput type="text" value={props.sizePicker[0]} onChange={event => props.handleSizeChange(event, 0)}/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.sizePicker[1]} onChange={event => props.handleSizeChange(event, 1)}/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.sizePicker[2]} onChange={event => props.handleSizeChange(event, 2)}/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" value={props.sizePicker[3]} onChange={event => props.handleSizeChange(event, 3)}/><span>BB</span>
          </InputContainer>
        </FreqButtonRow>

        <FreqButtonRow style={{marginTop: "15px"}}>
          <ControlButton onClick={props.handleLoadClick}>LOAD</ControlButton>
          <ControlButton>SUBMIT</ControlButton>
        </FreqButtonRow>
      </SelectButtonContainer>
      <SingleBar {...props}/>
    </SelectContainer>
  );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
;`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-bottom: 10px;
;`

const FreqButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 5px 10px 0 0;
;`

const InputContainer = styled.div`
  width: 70px;
  text-align: left;
;`

const ControlButton = styled.div`
  user-select: none;
  font-size: 14px;
  padding: 8px 0;
  font-weight: 500;
  width: 120px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #414141;
  margin-right: 10px;

  &:hover,
  &:active {
    background-color: #525252;
  }
;`

const FreqButton = styled(ControlButton)`
  border: 1px solid ${({color}) => color};
  background-color: transparent;
  width: 50px;
  padding: 3px 0;

  &:hover,
  &:active,
  &.active {
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

const RaiseText = styled.div`
  font-size: 0.6rem;
;`
export default FreqSelect;
