import React from 'react';

function Buttons() {
  return (
    <div className="button-container">
      <div className="button-group">
        <div className="button-label">Hero Position</div>
        <div className="button-row">
          <button className="selecta">UTG</button>
          <button className="selecta">HJ</button>
          <button className="selecta">CO</button>
          <button className="selecta">BTN</button>
          <button className="selecta">SB</button>
          <button className="selecta">BB</button>
        </div>
      </div>
      <div className="button-group">
        <div className="button-label">Villain Position</div>
        <div className="button-row">
          <button className="selecta">UTG</button>
          <button className="selecta">HJ</button>
          <button className="selecta">CO</button>
          <button className="selecta">BTN</button>
          <button className="selecta">SB</button>
          <button className="selecta">BB</button>
        </div>
      </div>
      <div className="button-group">
        <div className="button-label">Facing Action</div>
        <div className="button-row">
          <button className="selecta">N/A</button>
          <button className="selecta">Limp</button>
          <button className="selecta">Raise</button>
          <button className="selecta">3bet</button>
          <button className="selecta">4bet</button>
          <button className="selecta">Jam</button>
        </div>
      </div>
    </div>
  )
}


export default Buttons;
