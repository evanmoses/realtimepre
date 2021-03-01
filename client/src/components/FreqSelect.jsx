import React from 'react';
import styled from 'styled-components/macro';

function FreqSelect(props) {
  const x = props.range.betRange[props.currentCombo];
  let y = []
  x.raise ? y = x.raise : y = null;

  return (
    <SelectContainer>
      <SelectButtonContainer>
        <FreqButtonRow>
          <FreqButton color="#85c2c9">FOLD</FreqButton>
          <InputContainer>
            <FreqInput type="text" placeholder="100"/><span>%</span>
          </InputContainer>
          <FreqButton style={{marginLeft: "20px"}}color="#aecf84">CALL</FreqButton>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>%</span>
          </InputContainer>
        </FreqButtonRow>
        <FreqButtonRow style={{marginTop: "15px"}}>
            <FreqButton color="#a484d1">RAISE</FreqButton>
            <RaiseText>Raise size, smallest to largest</RaiseText>
        </FreqButtonRow>

        <FreqButtonRow>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>%</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>%</span>
          </InputContainer>
        </FreqButtonRow>

        <FreqButtonRow>
          <InputContainer>
            <FreqInput type="text" placeholder="3"/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>BB</span>
          </InputContainer>
          <InputContainer>
            <FreqInput type="text" placeholder="0"/><span>BB</span>
          </InputContainer>
        </FreqButtonRow>

        <FreqButtonRow style={{marginTop: "15px"}}>
          <ControlButton onClick={props.handleLoadClick}>LOAD</ControlButton>
          <ControlButton>SUBMIT</ControlButton>
        </FreqButtonRow>
      </SelectButtonContainer>
      <SingleBar>
        <FreqFill>
          {y[3] ? <Freq color="#d1b684" height={`${y[3].freq/100*170}px`} /> : null}
          {y[2] ? <Freq color="#d19184" height={`${y[2].freq/100*170}px`} /> : null}
          {y[1] ? <Freq color="#d184ce" height={`${y[1].freq/100*170}px`} /> : null}
          {y[0] ? <Freq color="#a484d1" height={`${y[0].freq/100*170}px`} /> : null}
          {x.callFreq ? <Freq color="#aecf84" height={`${x.callFreq/100*150}px`} /> : null}
          {x.foldFreq ? <Freq color="#85c2c9" height={`${x.foldFreq/100*150}px`} /> : null}
        </FreqFill>
      </SingleBar>
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

const SingleBar = styled.div`
  width: 15%;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const FreqFill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: flex-end;
;`

const Freq = styled.div`
  width: 25px;
  background-color: ${({color}) => color};
  height: ${({height}) => height};
;`

const RaiseText = styled.div`
  font-size: 0.6rem;
;`
export default FreqSelect;
