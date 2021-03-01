import React from 'react';
import styled from 'styled-components/macro';
import FreqSelect from './FreqSelect.jsx'
import FreqBars from './FreqBars.jsx'

function FreqDisplay(props) {
  if (props.range === null || props.currentCombo === null) {
    return <FreqContainer />;
  }

  return (
    <FreqContainer {...props}>
      {!props.displayActive ? <FreqSelect {...props}/> : <FreqBars {...props}/>}
    </FreqContainer>
  );
}

const FreqContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.displayActive ? "center" : "space-around"};
  width: 100%;
;`

 export default FreqDisplay;
