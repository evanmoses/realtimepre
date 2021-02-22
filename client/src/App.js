import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/macro';

import './App.css';

import Testlink from './components/Testlink.jsx'
import Rangechart from './components/Rangechart.jsx'
import Dash from './components/Dash.jsx'


const MainContainer = styled.div`
  /* stylelint-disable */
  text-align: center;
  padding: 10px;
  color: #d4d4d4;
`;

const AppRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const DispButton = styled.button`
  border: 1px solid #d4d4d4;
  height: 30px;
  width: 150px;

  &:hover,
  &:active,
  &:focus {
    background-color: #702227;
  }
`;

function App() {

  const [displayActive, setDisplay] = useState(true);

  const setSelect = () => setDisplay(false);
  const setView = () => setDisplay(true);



  return (
    <MainContainer>
      <AppRow>
        <DispButton onClick={setSelect}>Create Range</DispButton>
        <DispButton onClick={setView}>Display</DispButton>
      </AppRow>
      <AppRow>
        <Rangechart displayActive={displayActive} />
        <Dash displayActive={displayActive} />
      </AppRow>
    </MainContainer>
  );
}

export default App;
