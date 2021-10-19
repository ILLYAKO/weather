import React, { useState } from "react";
import { Redirect} from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import { register } from "../../../store/utils/thunkCreators";

const RegisterPage = (props) => {
  const { user, register, isLoading, error } = props;
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPasswordMsg: "Passwords must match!" });
      return;
    }

    await register({ username, email, password });
  };

    if (user?.id) {
      return <Redirect to="/" />;
    }

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        {error && <h3 className="text-danger">Try again.</h3>}
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="User name"
            required
            title="This field should not be left blank."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            isInvalid={!!formErrorMessage.confirmPasswordMsg}
            type="password"
            name="confirmPassword"
            placeholder="Please Confirm Password"
            required
          />
          <Form.Text className="text-danger">
            {formErrorMessage.confirmPasswordMsg}
          </Form.Text>
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>{" "}
              Loading ...
            </>
          ) : (
            "Register"
          )}
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
