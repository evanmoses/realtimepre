import React, {useState} from 'react';
import styled from 'styled-components/macro';

function PostPopUp(props) {
  const [postPass, setPostPass] = useState('');
  const [passAlert, setPassAlert] = useState(false);

  const handlePassChange = event => {
    const pass = event.target.value;
    setPostPass(pass);
  }

  const handlePassSubmit = event => {
    event.preventDefault();
    if (postPass !== process.env.REACT_APP_POST_PASS) {
      setPassAlert(true);
    } else {
      props.postRange()
      setPassAlert(false);
    }
  }

  const reset = () => props.setPostMessage('');

  return (
    <Container>
      {props.postMessage === 'login' &&
        <Login onSubmit={handlePassSubmit}>
          <p>Enter password to post range</p>
          {passAlert && <p>Incorrect Password!</p>}
          <Input type='password' value={postPass} onChange={handlePassChange}/>
          <Button onClick={reset}>Cancel</Button>
          <Button type='submit'>Submit</Button>
        </Login>}
      {props.postMessage === 'confirm' &&
        <Confirm>
          <p>Range for this scenario already exists, press confirm to overwrite</p>
          <Button onClick={reset}>Cancel</Button>
          <ConfirmButton onClick={reset}>Confirm</ConfirmButton>
        </Confirm>}
    </Container>
  )
}

const Container = styled.div`
  background-color: #414141;
  padding: 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p {
    font-size: 1.4rem;
    margin: 0;
  }
;`

const Login = styled.form`
;`

const Input = styled.input`
  font-size: 18px;
  width: 80%;
  background-color: #d4d4d4;
  color: #414141;
  text-align: center;
  border-radius: 3px;
  margin: 15px 0;

  &:focus {
    background-color: #d4d4d4;
    box-shadow: 0 0 0 2px #525252;
  }

  &::placeholder {
    color: #d4d4d4;
  }
;`

const Confirm = styled.div`
;`

const Button = styled.button`
  user-select: none;
  font-size: 14px;
  padding: 8px 0;
  font-weight: 500;
  width: 120px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #525252;
  margin: 10px 15px;

  &:hover,
  &:active {
    background-color: #636363;
  }
;`

const ConfirmButton = styled(Button)`
  background-color: #702227;
  &:hover {
    #702227;
  }
;`


export default PostPopUp;
