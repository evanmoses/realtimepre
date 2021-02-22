import React from 'react';
import styled from 'styled-components/macro';

const CheckButton = styled.button`
  border: 1px solid #d4d4d4;
  height: 30px;
  width: 60px;

  &:hover,
  &:active,
  &:focus {
    background-color: #702227;
  }
`;

function Buttons() {
  return (
    <div className="button-container">
      <div className="button-group">
        <div className="button-label">Hero Position</div>
        <div className="button-row">
          <CheckButton>UTG</CheckButton>
          <CheckButton>HJ</CheckButton>
          <CheckButton>CO</CheckButton>
          <CheckButton>BTN</CheckButton>
          <CheckButton>SB</CheckButton>
          <CheckButton>BB</CheckButton>
        </div>
      </div>
      <div className="button-group">
        <div className="button-label">Villain Position</div>
        <div className="button-row">
          <CheckButton>UTG</CheckButton>
          <CheckButton>HJ</CheckButton>
          <CheckButton>CO</CheckButton>
          <CheckButton>BTN</CheckButton>
          <CheckButton>SB</CheckButton>
          <CheckButton>BB</CheckButton>
        </div>
      </div>
      <div className="button-group">
        <div className="button-label">Facing Action</div>
        <div className="button-row">
          <CheckButton>N/A</CheckButton>
          <CheckButton>Limp</CheckButton>
          <CheckButton>Raise</CheckButton>
          <CheckButton>3bet</CheckButton>
          <CheckButton>4bet</CheckButton>
          <CheckButton>Jam</CheckButton>
        </div>
      </div>
    </div>
  )
}


export default Buttons;
