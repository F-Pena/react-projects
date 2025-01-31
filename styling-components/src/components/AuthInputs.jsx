import { useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import Input from './Input';

const StyledAuthInputs = styled.div`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`

const Controls = styled.div`
 display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.$invalid ? '#f87171' : '#6b7280'};
`

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${(props) => props.$invalid ? '#fed2d2' : '#d1d5db'};
  color: ${(props) => props.$invalid ? '#ef4444' : '#374151'};
  border: 1px solid ${(props) => props.$invalid ? '#f73f3f' : 'transparent'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  will-change: background-color;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0920e;
  }
`

const TextButton = styled.button`
  color: #f0b322;
  border: none;
  will-change: color;
  transition: color 0.3s ease;

  &:hover {
    color: #f0920e;
  }
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-full max-w-sm p-8 mx-auto rounded-lg shadow-md bg-gradient-to-b from-stone-700 to-stone-800 text-white">
      <div className="flex flex-col gap-2 mb-6">
        {/* <p>
          <Label htmlFor="email" $invalid={emailNotValid}>Email</Label>
          <Input
            id="email"
            type="email" 
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p> */}
        {/* <p>
          <Label htmlFor="password" $invalid={passwordNotValid}>Password</Label>
          <Input
            id="password"
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}

        <Input label="Email" invalid={emailNotValid} />
        <Input label="Password" invalid={passwordNotValid} />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
