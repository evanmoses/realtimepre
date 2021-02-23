import React from 'react';
import styled from 'styled-components/macro';
import FreqSelect from './FreqSelect.jsx'

function FreqDisplay(props) {
  return (
    <FreqContainer {...props}>
    {!props.displayActive && <FreqSelect />}
      <FreqBars>
        <ActionCol>
          <div className="frequency">25%</div>
          <div className="bar" style={{height:"50px", backgroundColor: "#85c2c9"}} />
          <div className="action">FOLD</div>
        </ActionCol>
        <ActionCol>
          <div className="frequency">50%</div>
          <div className="bar" style={{height: "125px", backgroundColor: "#aecf84"}}></div>
          <div className="action">CALL</div>
        </ActionCol>
        <ActionCol>
          {props.displayActive ? <div className="frequency">25%</div> : null}
          <RaiseBars>
            <div className="bar" style={{height:"50px", backgroundColor: "#d184ce"}}></div>
            <div className="bar" style={{height:"50px", backgroundColor: "#d15678"}}></div>
            <div className="bar" style={{height:"50px", backgroundColor: "#d13421"}}></div>
          </RaiseBars>
          <div className="action">RAISE</div>
        </ActionCol>
      </FreqBars>
    </FreqContainer>
  );
}

const FreqContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.displayActive ? "center" : "space-between"};
  align-items: flex-end;
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

 export default FreqDisplay;
