import React from 'react';
import styled from 'styled-components/macro';


function FreqBars(props) {
  const x = props.range.betRange[props.currentCombo]
  const y = x.raise;

  const raiseColorPicker = (index) => {
    if (index === 0) {
      return "#a484d1";
    }
    if (index === 1) {
      return "#d184ce";
    }
    if (index === 2) {
      return "#d19184";
    }
    if (index === 3) {
      return "#d1b684";
    }
  }
  return (
    <Container>
    {!x.foldFreq ? null :
      <ActionCol key='foldCol'>
        <FreqText>{x.foldFreq}%</FreqText>
        <Bar color="#85c2c9" height={`${x.foldFreq*1.5}px`} />
        <ActionText>FOLD</ActionText>
      </ActionCol>
    }
    {!x.callFreq ? null :
      <ActionCol key='callCol'>
        <FreqText>{x.callFreq}%</FreqText>
        <Bar color="#aecf84" height={`${x.callFreq*1.5}px`} />
        <ActionText>CALL</ActionText>
      </ActionCol>
    }
    {!y[0] ? null :
      [!y[0].freq ? null :
        <ActionCol key='raiseCol'>
          <RaiseBars>
            {y.map((raise,index) => {
              return (
              <ActionCol key={`ActionCol:${index}`}>
                <FreqText>{raise.freq}%</FreqText>
                <Bar color={raiseColorPicker(index)} height={`${raise.freq*1.5}px`}>
                  <FreqText>{raise.size}<span>BB</span></FreqText>
                </Bar>
              </ActionCol>
              )
            })}
          </RaiseBars>
          <ActionText>RAISE</ActionText>
        </ActionCol>
      ]
    }
  </Container>
  )
}

const Container = styled.div`
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
  height: ${props => props.height};
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

export default FreqBars;
