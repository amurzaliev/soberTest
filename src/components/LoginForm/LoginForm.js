import React from 'react';
import {Field, reduxForm} from "redux-form";
import './LoginForm.css';

let LoginForm = props => {
  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group Auth__formGroup">
        <label htmlFor="username">Электронная почта</label>
        <Field component="input" type="email" className="form-control Auth__formControl" id="username" name="username"/>
      </div>
      <div className="form-group Auth__formGroup">
        <label htmlFor="password">Пароль</label>
        <Field component="input" type="password" className="form-control Auth__formControl" id="password" name="password"/>
      </div>
      <p className="text-center"><a className="LoginForm__recoverLink" href="#">Не помню пароль</a></p>
      <button type="submit" className="btn btn-primary Auth__btn--submit">Войти</button>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;