import React from 'react';
import styled from 'styled-components/macro'
import combos from '../lib/combos.jsx';
import ActionRandomizer from './ActionRandomizer.jsx';

function Rangechart(props) {

  return (
    <RangeBox>
      <RangeContainer>
        {combos.map((combo, index) => {
          return (
            <ComboSquare key={combo}>
              {combo}
              <FreqBar>{props.range !== null ? props.range.betRange[index].hand : null }</FreqBar>
            </ComboSquare>
          )
        })}
      </RangeContainer>
      <ActionRandomizer action='FOLD'/>
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
;`

const FreqBar = styled.div`
  font-size: 0.3rem;
;`

export default Rangechart;
