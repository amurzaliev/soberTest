import React, {Component} from 'react';
import AuthNav from "../../components/AuthNav";
import './Auth.css';
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default class Auth extends Component {
  state = {
    activeFormId: 'auth',
    navItems: [
      {id: 'auth', label: 'Вход'},
      {id: 'register', label: 'Регистрация'}
    ]
  };

  changeForm = activeFormId => {
    this.setState({activeFormId});
  };

  onLoginSubmit = values => {
    console.log(values);
  };

  onRegisterSubmit = values => {
    console.log(values);
  };


  render() {
    const {navItems, activeFormId} = this.state;
    let form;
    switch (activeFormId) {
      case 'auth':
        form = <LoginForm onSubmit={this.onLoginSubmit}/>;
        break;
      case 'register':
        form = <RegisterForm onSubmit={this.onRegisterSubmit}/>;
        break;
      default:
        form = <LoginForm onSubmit={this.onLoginSubmit}/>;
    }

    return (
      <div className="vertical-center">
        <div className="Auth">
          <AuthNav navItems={navItems} activeFormId={activeFormId} changeForm={this.changeForm}/>
          {form}
        </div>
      </div>
    );
  };
}