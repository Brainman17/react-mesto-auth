import React from "react";
import Header from "./Header";
import { useState, useCallback } from "react";
import { Link, Navigate } from "react-router-dom";

export const Register = ({ isLoggedIn, onRegister }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    },
    [userData]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(userData);
    },
    [onRegister, userData]
  );

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Header>
        <Link to="/signin" className="header__menu-item">
          Войти
        </Link>
      </Header>
        <h2 className="homepage__heading">Регистрация</h2>
        <form
          name="Регистрация"
          className="homepage__form"
          onSubmit={handleSubmit}
        >
          <div className="homepage__container">
            <input
              value={userData.email}
              onChange={handleChange}
              required
              minLength="1"
              maxLength="30"
              type="text"
              name="email"
              placeholder="Email"
              className="homepage__input homepage__input_email"
            />
          </div>
          <div className="homepage__container">
            <input
              value={userData.password}
              onChange={handleChange}
              required
              type="password"
              name="password"
              placeholder="Пароль"
              className="homepage__input homepage__input_password"
            />
          </div>
          <button
            type="submit"
            aria-label="Кнопка регистрации"
            className="homepage__button"
            onSubmit={handleSubmit}
          >
            Зарегистрироваться
          </button>
          <p className="homepage__button_caption">
            Уже зарегистрированы?
            <Link className="homepage__button_link" to="/signin">
              &nbsp;Войти
            </Link>
          </p>
        </form>
    </>
  );
};

