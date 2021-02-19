import React from 'react';
import combos from '../lib/combos.jsx';

function Rangechart() {
  return (
    <div className="rangebox">
      <div className='rangecontainer'>
        {combos.map((combo,i) => {
          return (

            <div className='rangechart' key={i}>
              <span>{combo}</span>
            </div>
          )
        })}

      </div>
      <div className='freq-random'>
        <div className="randomizer">85</div>
        <div className="action-large">FOLD</div>
      </div>
    </div>
  );
}


export default Rangechart;
