import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./SignIn.css";
import FormInput from "../FormInput";
import Button from "../Button";
import AuthLink from "../AuthLink/AuthLink";

interface IFormFields {
  email: string;
  password: string;
}

interface IErrorDetail {
  message: string;
  domain: string;
  reason: string;
}

interface IErrorResponse {
  code: string;
  message: string;
  errors: IErrorDetail[];
}

const defaultFormFields: IFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState<IFormFields>(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      const redirectUrl =
        new URLSearchParams(location.search).get("redirectUrl") || "/";
      resetFormFields();
      navigate(decodeURIComponent(redirectUrl));
    } catch (error) {
      if ((error as IErrorResponse).code === "auth/invalid-credential") {
        alert("Invalid credentials");
      } else {
        console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign in</h2>

        <div className="form-group">
          <FormInput
            label="Email"
            htmlFor="email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <FormInput
            label="Password"
            htmlFor="password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>

        <AuthLink />
      </form>
    </div>
  );
};

export default SignIn;
