import React from 'react';
import styled from 'styled-components/macro';

function SingleBar(props) {
  if (props.range === null || props.currentCombo === null) {
    return <Container />;
  }

  const x = props.range.betRange[props.currentCombo];
  let y = []
  x.raise ? y = x.raise : y = null;
  return (
    <Container>
      <FreqFill>
        {y[3] ? <Freq color="#d1b684" height={`${y[3].freq/100*170}px`} /> : null}
        {y[2] ? <Freq color="#d19184" height={`${y[2].freq/100*170}px`} /> : null}
        {y[1] ? <Freq color="#d184ce" height={`${y[1].freq/100*170}px`} /> : null}
        {y[0] ? <Freq color="#a484d1" height={`${y[0].freq/100*170}px`} /> : null}
        {x.callFreq ? <Freq color="#aecf84" height={`${x.callFreq/100*150}px`} /> : null}
        {x.foldFreq ? <Freq color="#85c2c9" height={`${x.foldFreq/100*150}px`} /> : null}
      </FreqFill>
    </Container>
  )
}

const Container = styled.div`
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

export default SingleBar;
