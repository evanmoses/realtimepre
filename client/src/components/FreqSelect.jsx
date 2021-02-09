import React from 'react';

function FreqSelect() {
  return (
    <div className="freq-container">
      <div className="bar-container">
        <div className="freq-input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <button className="action-btn" style={{backgroundColor: "#90cf3e"}}>CALL</button>
      </div>
      <div className="bar-container">
        <div className="freq=input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <button className="action-btn" style={{backgroundColor: "#cf3eca"}}>RAISE</button>
      </div>
      <div className="bar-container">
        <div className="freq-input">
          <input className="set-freq" type="text" placeholder="100"/><span>%</span>
        </div>
        <button className="action-btn" style={{backgroundColor: "#3ec0cf"}}>FOLD</button>
      </div>
      <div className="bar-container">
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}

export default FreqSelect;
