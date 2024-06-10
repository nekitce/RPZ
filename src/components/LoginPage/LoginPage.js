import React from 'react';
import './LoginPage.css';
import AuthForm from '../AuthForm/AuthForm';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">Авторизация</h1>
      <AuthForm />
    </div>
  );
};

export default LoginPage;