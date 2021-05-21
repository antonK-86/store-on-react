import React from "react";
import "./Registration.css";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div className="form-content_input">
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const Registration = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
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
          //validate={email}
          //warn={aol}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          //validate={[required, password]}
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
