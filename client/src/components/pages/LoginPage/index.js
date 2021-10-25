import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { login } from "../../../store/utils/thunkCreators";

const LoginPage = (props) => {
  const { user, login, isLoading, error } = props;
  console.log(error);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await login({ email, password });
  };

  if (user?.id) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        {error && <h3 className="text-danger">Try again.</h3>}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Loading ...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Container>
  );
};


const mapStateToProps = (state) => {
  // console.log("state:", state);
  return {
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
