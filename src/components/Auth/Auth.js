import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
const Auth = ({ onAuthLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Card className="my-5">
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <div className="d-flex flex-column align-items-center justify-content-center my-2">
            <input
              type="email"
              placeholder="User Name"
              className=" d-flex form-control w-50 my-2"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className=" d-flex form-control w-50 my-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            variant="primary"
            className="my-2"
            onClick={() => onAuthLogin(userName)}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Auth;
