import React from 'react';
import styled from 'styled-components/macro'

import Buttons from './Buttons.jsx'
import FreqSelect from './FreqSelect.jsx'
import FreqDisplay from './FreqDisplay.jsx'

function Dash(props) {

  return (
    <DashBox>
      <div>
        <Buttons />
      </div>
      <div>
        {props.displayActive ? <FreqDisplay /> : <FreqSelect />}
      </div>
    </DashBox>
  )
}

const DashBox = styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
;`

export default Dash;
