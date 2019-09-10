import React from 'react';
import {Field, reduxForm} from "redux-form";
import './RegisterForm.css';

let RegisterForm = props => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field component="input" type="email" className="form-control Auth__formControl" id="username" name="username"
        placeholder="Электронная почта"/>
      </div>
      <button type="submit" className="btn btn-primary Auth__btn--submit">Зарегестрироваться</button>
    </form>
  );
};

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;