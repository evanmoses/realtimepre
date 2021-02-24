import React from 'react';
import styled from 'styled-components/macro';
import FreqSelect from './FreqSelect.jsx'

function FreqDisplay(props) {
  return (
    <FreqContainer {...props}>
      {!props.displayActive && <FreqSelect />}
      <FreqBars>
        <ActionCol>
          <FreqText>25%</FreqText>
          <Bar color="#85c2c9" style={{height:"50px"}} />
          <ActionText>FOLD</ActionText>
        </ActionCol>
        <ActionCol>
          <FreqText>50%</FreqText>
          <Bar color="#aecf84" style={{height: "125px"}} />
          <ActionText>CALL</ActionText>
        </ActionCol>
        <ActionCol>
          <RaiseBars>
            <ActionCol>
              <FreqText>25%</FreqText>
              <Bar color="#a484d1" style={{height: "50px"}}>
                <FreqText>10<span>BB</span></FreqText>
              </Bar>
            </ActionCol>
            <ActionCol>
              <FreqText>25%</FreqText>
              <Bar color="#d184ce"style={{height: "100px"}}>
                <FreqText>13<span>BB</span></FreqText>
              </Bar>
            </ActionCol>
            <ActionCol>
              <FreqText>25%</FreqText>
              <Bar color="#d19184" style={{height: "40px"}}>
                <FreqText>10<span>BB</span></FreqText>
              </Bar>
            </ActionCol>
            <ActionCol>
              <FreqText>25%</FreqText>
              <Bar color="#d1b684" style={{height: "40px"}}>
                <FreqText>10<span>BB</span></FreqText>
              </Bar>
            </ActionCol>
          </RaiseBars>
          <ActionText>RAISE</ActionText>
        </ActionCol>
      </FreqBars>
    </FreqContainer>
  );
}

const FreqContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.displayActive ? "center" : "space-around"};
  width: 100%;
;`

const FreqBars = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
;`

const ActionCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
;`

const RaiseBars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
;`

const Bar = styled.div`
  background-color: ${({color}) => color};
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #702227;
;`

const FreqText = styled.div`
  font-size: 12px;
  font-weight: 500;

  & > span {
    font-size: 8px;
  }
;`

const ActionText = styled.div`
  font-size: 20px;
  font-weight: 500;
  height: 30px;
;`

 export default FreqDisplay;
