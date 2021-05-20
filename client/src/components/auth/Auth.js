import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const Auth = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
          //validate={[required, maxLength15, minLength2]}
          //warn={alphaNumeric}
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
          //validate={email}
          //warn={aol}
        />
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
          //validate={[required, number, minValue13]}
          //warn={tooYoung}
        />
        <Field
          name="phone"
          type="number"
          component={renderField}
          label="Phone number"
          //validate={[required, phoneNumber]}
        />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
  );
};

export default reduxForm({
  form: "authForm",
})(Auth);
