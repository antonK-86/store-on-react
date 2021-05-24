import React from "react";
import "./Registration.css";
import { Field, reduxForm } from "redux-form";

const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength6 = minLength(6);

const password = (value) =>
  value && !/^[A-Za-z0-9._%+-@]/.test(value) ? "Invalid password" : undefined;

const aol = (value) =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  const showError = touched && error;
  return (
    <div>
      <label>{label}</label>
      <div className={"form-content_input " + (showError ? "input-error" : "")}>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span className="field-error">{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );
};

const Registration = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(submitting);
  console.log(pristine);
  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <div className="form-header">
        <h1>Регистрация</h1>
        <span>Введите данные для регистрации личного кабинета.</span>
      </div>
      <div className="form-content">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          validate={[required, email]}
          warn={aol}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={[required, password, minLength6]}
        />
      </div>
      <div className="form-footer">
        <button type="submit" disabled={submitting}>
          Отправить
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Отмена
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "authForm",
})(Registration);
