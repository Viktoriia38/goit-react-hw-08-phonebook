import { useDispatch } from 'react-redux';
import * as React from 'react';
import SingUp from 'components/SingUp/SingUp';
import { registerRequest } from 'redux/authOperations';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleRegister = formData => {
    console.log(formData);
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      <SingUp onSubmit={handleRegister} />
    </div>
  );
}
