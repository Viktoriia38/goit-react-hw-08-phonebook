import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { useRef } from 'react';
import { selectiIsLoading, selectToken } from 'redux/selectors';
import propTypes from 'prop-types';
import css from '../SingIn/SignIn.module.css';

export default function SingIn({ onSubmit }) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const isLoading = useSelector(selectiIsLoading);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    navigate('/contacts');
  }, [token, navigate]);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <>
      {isLoading === true && <Loader />}
      {!token ? (
        <form onSubmit={handleSubmit}>
          <div className={css.loginForm}>
            <div className={css.loginLabel}>
              <label>
                <span>Email </span>
                <input
                  className={css.loginInput}
                  type="email"
                  name="email"
                  placeholder={'Введіть cвій e-mail'}
                  label="Email"
                  ref={emailInputRef}
                  required
                />
              </label>
            </div>
            <div className={css.loginLabel}>
              <label>
                <span>Password </span>
                <input
                  className={css.loginInput}
                  label="Password"
                  type="password"
                  name="password"
                  minLength={7}
                  required
                  placeholder={'Введіть пароль'}
                  ref={passwordInputRef}
                />
              </label>
            </div>
            <button className={css.loginBtn}>login</button>
          </div>
        </form>
      ) : (
        ''
      )}
    </>
  );
}

SingIn.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
