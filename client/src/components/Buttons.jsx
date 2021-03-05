import React, {useState} from 'react';
import styled from 'styled-components/macro';

function Buttons(props) {

  const positionArray = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB']
  const actionArray = ['N/A', 'LIMP', 'RAISE', '3BET', 'SQZ', '4BET', 'JAM']

  return (
    <ButtonContainer>
      <ButtonGroup>
        <ButtonHeading>Hero Position</ButtonHeading>
        {positionArray.map(position => {
          return (
            <ButtonLabel key={`hero${position}`}>
              <CheckButton type='radio' name='hero' value={position} checked={props.heroPosition===position} onChange={props.handleHeroChange} />
              <span>{position}</span>
            </ButtonLabel>
          )
        })}
      </ButtonGroup>
      <ButtonGroup>
        <ButtonHeading>Villain Position</ButtonHeading>
        {positionArray.map(position => {
          return (
            <ButtonLabel key={`villain${position}`}>
              <CheckButton type='radio' name='villain' value={position} checked={props.villainPosition===position} onChange={props.handleVillainChange} />
              <span>{position}</span>
            </ButtonLabel>
          )
        })}
      </ButtonGroup>
      <ButtonGroup>
        <ButtonHeading>Facing Action</ButtonHeading>
        {actionArray.map(action => {
          return (
            <ButtonLabel key={`facing${action}`}>
              <CheckButton type='radio' name='action' value={action} checked={props.facingAction===action} onChange={props.handleActionChange} />
              <span style={{width:'51.5px'}}>{action}</span>
            </ButtonLabel>
          )
        })}
      </ButtonGroup>
    </ButtonContainer>
  )
}


const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonHeading = styled.div`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  text-align: left;
  margin-bottom: 6px;
`;

const ButtonGroup = styled.div`
  margin-bottom: 15px;
`;

const ButtonLabel = styled.label`
  & > span {
    display: inline-block;
    border: 1px solid #d4d4d4;
    margin: 0;
    height: 30px;
    width: 60px;
    line-height: 30px;
    text-align: center;

    @media (max-width: 420px) {
      width: 45px;
    }
  }

  &:hover > span,
  &:active > span,
  &:focus > span
  &:checked {
    background-color: #702227;
    border: 1px solid #d4d4d4;
  }
`;

const CheckButton = styled.input`
  display: none;

  &:checked + span {
    background-color: #702227;
    border: 1px solid #d4d4d4;
  }
`;

export default Buttons;
