import React from 'react';

function FreqDisplay() {
  return (
    <div>
      <div className="freq-container">
        <div className="action-col">
          <div className="action">CALL</div>
          <div className="action">RAISE</div>
          <div className="action">FOLD</div>
        </div>
        <div className="freq-col">
          <div className="bar-container" style={{width: '150px'}}>
            <div className="bar" style={{backgroundColor: "#85c2c9"}}></div>
            <div className="frequency">50%</div>
          </div>
          <div className="bar-container" style={{width: '75px', marginLeft: '150px'}}>
            <div className="bar" style={{backgroundColor: "#aecf84", width: '75px'}}></div>
            <div className="frequency">25%</div>
          </div>
          <div className="bar-container" style={{width: '75px', marginLeft: '225px'}}>
            <div className="bar" style={{backgroundColor: "#d184ce",  width: '75px'}}></div>
            <div className="frequency">25%</div>
          </div>

        </div>
      </div>
      <div className='freq-random'>
        <div className="randomizer">85</div>
        <div className="action-large">FOLD</div>
      </div>
    </div>
  );
}

 export default FreqDisplay;
