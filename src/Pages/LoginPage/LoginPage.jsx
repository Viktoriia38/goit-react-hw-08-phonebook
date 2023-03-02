import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/authOperations';
import * as React from 'react';
import SingIn from 'components/SingIn/SingIn';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };

  return (
    <div>
      <SingIn onSubmit={handleLogin} />
    </div>
  );
}
