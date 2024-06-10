import React, { useState } from 'react';
import './AuthForm.css';
import { login } from '../../utils/api';
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      await navigate("/");
      // Здесь можно добавить логику после успешной авторизации
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="login-page__title"></h1>
      <label className="auth-form__label">
        Логин:
        <input
          className="auth-form__input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="auth-form__label">
        Пароль:
        <input
          className="auth-form__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="auth-form__submit" type="submit">
        Войти
      </button>
    </form>
  );
};

export default AuthForm;