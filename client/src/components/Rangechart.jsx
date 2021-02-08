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
    </div>
  );
}


export default Rangechart;
