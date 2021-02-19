import React from 'react';
import Buttons from './Buttons.jsx'
import FreqSelect from './FreqSelect.jsx'
import FreqDisplay from './FreqDisplay.jsx'

function Dash() {
  return (
    <div className="dashbox">
      <div className="dash-container">
        <Buttons />
      </div>
      <div className="dash-container">
        {/*<FreqSelect />*/}
        <FreqDisplay />
      </div>
    </div>
  )
}

export default Dash;
