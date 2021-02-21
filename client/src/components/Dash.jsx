import React from 'react';
import Buttons from './Buttons.jsx'
import FreqSelect from './FreqSelect.jsx'
import FreqDisplay from './FreqDisplay.jsx'

function Dash(props) {

  return (
    <div className="dashbox">
      <div className="dash-container">
        <Buttons />
      </div>
      <div className="dash-container">
        {props.displayActive ? <FreqDisplay /> : <FreqSelect />}
      </div>
    </div>
  )
}

export default Dash;
