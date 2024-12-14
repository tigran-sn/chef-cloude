import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./SignUp.css";
import FormInput from "../FormInput";
import Button from "../Button";
import AuthLink from "../AuthLink/AuthLink";
import { useNavigate } from "react-router-dom";

interface IFormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
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
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState<IFormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
      navigate("/");
    } catch (error) {
      if ((error as IErrorResponse).code === "auth/email-already-in-use") {
        alert("Cannot create a user, email is already in use");
      } else {
        console.error("User creation encountered an error", error);
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
        <h2>Create an account</h2>

        <div className="form-group">
          <FormInput
            label="Display name"
            htmlFor="displayName"
            type="text"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />
        </div>

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

        <div className="form-group">
          <FormInput
            label="Confirm Password"
            htmlFor="confirmPassword"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit">Sign Up</Button>

        <AuthLink />
      </form>
    </div>
  );
};

export default SignUp;
