 import React from 'react';

 function FreqDisplay() {
   return (
     <div className="freq-container">
      <div className="bar-container">
        <div className="bar" style={{backgroundColor: "#90cf3e"}}></div>
        <div className="frequency">25%</div>
        <div className="action">CALL</div>
      </div>
      <div className="bar-container">
        <div className="bar" style={{backgroundColor: "#cf3eca"}}></div>
        <div className="frequency">25%</div>
        <div className="action">RAISE</div>
      </div>
      <div className="bar-container">
        <div className="bar" style={{backgroundColor: "#3ec0cf"}}></div>
        <div className="frequency">25%</div>
        <div className="action">FOLD</div>
      </div>
      <div  className="bar-container">
        <div className="randomizer">85</div>
        <div className="action-large">FOLD</div>
      </div>

     </div>
   );
 }

 export default FreqDisplay;
