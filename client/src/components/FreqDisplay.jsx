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
          <Bar style={{height:"50px", backgroundColor: "#85c2c9"}} />
          <ActionText>FOLD</ActionText>
        </ActionCol>
        <ActionCol>
          <FreqText>50%</FreqText>
          <Bar style={{height: "125px", backgroundColor: "#aecf84"}} />
          <ActionText>CALL</ActionText>
        </ActionCol>
        <ActionCol>
          <FreqText>25%</FreqText>
          <RaiseBars>
            <Bar style={{height: "50px", backgroundColor: "#d184ce"}} />
            <Bar style={{height: "50px", backgroundColor: "#d15678"}} />
            <Bar style={{height: "50px", backgroundColor: "#d13421"}} />
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
  margin-right: 5px;
;`

const RaiseBars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
;`

const Bar = styled.div`
  width: 25px;
;`

const FreqText = styled.div`
  font-size: 12px;
  font-weight: 500;
;`

const ActionText = styled.div`
  font-size: 20px;
  font-weight: 500;
  height: 30px;
;`

 export default FreqDisplay;
