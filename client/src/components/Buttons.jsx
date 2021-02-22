import React, {useState} from 'react';
import styled from 'styled-components/macro';

function Buttons() {
  const [heroPosition, setHeroPosition] = useState('BB');
  const [villainPosition, setVillainPosition] = useState('BTN');
  const [facingAction, setFacingAction] = useState('N/A');

  const handleHeroChange = event => {
    const value = event.target.value;
    setHeroPosition(value);
  }

  const handleVillainChange = event => {
    const value = event.target.value;
    setVillainPosition(value);
  }

  const handleActionChange = event => {
    const value = event.target.value;
    setFacingAction(value);
  }



  return (
    <ButtonContainer>
      <ButtonGroup>
        <ButtonHeading>Hero Position</ButtonHeading>
        <ButtonLabel>
          <CheckButton type='radio' name='hero' value='UTG' checked={heroPosition==='UTG'} onClick={handleHeroChange} />
          <span>UTG</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio'  name='hero' value='HJ' checked={heroPosition==='HJ'} onClick={handleHeroChange} />
          <span>HJ</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio'  name='hero' value='CO' checked={heroPosition==='CO'} onClick={handleHeroChange} />
          <span>CO</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio'  name='hero' value='BTN' checked={heroPosition==='BTN'} onClick={handleHeroChange} />
          <span>BTN</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio'  name='hero' value='SB' checked={heroPosition==='SB'} onClick={handleHeroChange} />
          <span>SB</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio'  name='hero' value='BB' checked={heroPosition==='BB'} onClick={handleHeroChange} />
          <span>BB</span>
        </ButtonLabel>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonHeading>Villain Position</ButtonHeading>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='UTG' checked={villainPosition==='UTG'} onClick={handleVillainChange} />
          <span>UTG</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='HJ' checked={villainPosition==='HJ'} onClick={handleVillainChange} />
          <span>HJ</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='CO' checked={villainPosition==='CO'} onClick={handleVillainChange} />
          <span>CO</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='BTN' checked={villainPosition==='BTN'} onClick={handleVillainChange} />
          <span>BTN</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='SB' checked={villainPosition==='SB'} onClick={handleVillainChange} />
          <span>SB</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='villain' value='BB' checked={villainPosition==='BB'} onClick={handleVillainChange} />
          <span>BB</span>
        </ButtonLabel>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonHeading>Facing Action</ButtonHeading>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='N/A' checked={facingAction==='N/A'} onClick={handleActionChange} />
          <span>N/A</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='LIMP' checked={facingAction==='LIMP'} onClick={handleActionChange} />
          <span>LIMP</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='RAISE' checked={facingAction==='RAISE'} onClick={handleActionChange} />
          <span>RAISE</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='3BET' checked={facingAction==='3BET'} onClick={handleActionChange} />
          <span>3BET</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='4BET' checked={facingAction==='4BET'} onClick={handleActionChange} />
          <span>N/A</span>
        </ButtonLabel>
        <ButtonLabel>
          <CheckButton type='radio' name='action' value='4BET' checked={facingAction==='JAM'} onClick={handleActionChange} />
          <span>4BET</span>
        </ButtonLabel>
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
  margin-top: 15px;
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
