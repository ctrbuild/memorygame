import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import Admin from "./Admin";

export default function Login() {
const navigate = useNavigate();

const [emailInput, setEmail] = useState('');
const [passwordInput, setPassword] = useState('');

  function validateForm() {
    return emailInput.length > 0 && passwordInput.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let hardcodedCred = {
        email: 'ctrbuild1@gmail.com',
        password: 'password'
    }

    if ((emailInput === hardcodedCred.email) && (passwordInput === hardcodedCred.password)) {
        
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        navigate("/Admin")


    } else {
        //bad combination
        alert('wrong email or password combination');
    }
  }

  return (
    <div className="Login">
      <h2>Admin Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>

    </div>
  );

}