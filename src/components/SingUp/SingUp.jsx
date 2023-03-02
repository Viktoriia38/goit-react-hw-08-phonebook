import * as React from 'react';
import { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectiIsLoading, selectToken } from 'redux/selectors';
import propTypes from 'prop-types';
import css from '../SingUp/SingUp.module.css';

function SingUp({ onSubmit }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const isLoading = useSelector(selectiIsLoading);
  const token = useSelector(selectToken);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);
    e.target.reset();
  };

  return (
    <>
      {isLoading === true && <Loader />}
      {!token ? (
        <form onSubmit={handleSubmit}>
          <div className={css.registerForm}>
            <div className={css.registerLabel}>
              <label>
                <span>Name </span>
                <input
                  className={css.registerInput}
                  type="text"
                  name="name"
                  placeholder={"Введіть ім'я"}
                  label="Name"
                  ref={nameInputRef}
                  required
                />
              </label>
            </div>
            <div className={css.registerLabel}>
              <label>
                <span>Email </span>
                <input
                  className={css.registerInput}
                  type="email"
                  name="email"
                  placeholder={'Введіть cвій e-mail'}
                  label="Email"
                  ref={emailInputRef}
                  required
                />
              </label>
            </div>
            <div className={css.registerLabel}>
              <label>
                <span>Password </span>
                <input
                  className={css.registerInput}
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
            <button className={css.registerBtn}>Register</button>
          </div>
        </form>
      ) : (
        ''
      )}
    </>
  );
}
export default SingUp;

SingUp.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
