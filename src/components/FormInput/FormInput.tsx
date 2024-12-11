import "./FormInput.css";

const FormInput = ({ label, htmlFor, ...otherProps }) => {
  return (
    <>
      {label && (
        <label htmlFor={htmlFor} className="formInput__label">
          {label}
        </label>
      )}
      <input {...otherProps} className="formInput" />
    </>
  );
};

export default FormInput;
