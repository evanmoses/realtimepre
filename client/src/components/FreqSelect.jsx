 import React from 'react';

 function FreqSelect() {
   return (
     <div className="freq-container">
      <div className="bar-container">
        <div className="bar"></div>
        <div className="frequency">25%</div>
        <div className="action">CALL</div>
      </div>
      <div className="bar-container">
        <div className="bar"></div>
        <div className="frequency">25%</div>
        <div className="action">RAISE</div>
      </div>
      <div className="bar-container">
        <div className="bar"></div>
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

 export default FreqSelect;
