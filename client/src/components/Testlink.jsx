import React from 'react';
import Axios from 'axios'

function Testlink() {
  Axios({
    method: "GET",
    url: "http://localhost:9000/testbackend",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div>
      <span></span>
      <hr />
    </div>
  )
}

export default Testlink;
