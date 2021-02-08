import React from 'react';
import Buttons from './Buttons.jsx'
import FreqSelect from './FreqSelect.jsx'

function Dash() {
  return (
    <div className="dashbox">
      <div className="dash-container">
        <Buttons />
        <FreqSelect />
      </div>
    </div>
  )
}

export default Dash;
