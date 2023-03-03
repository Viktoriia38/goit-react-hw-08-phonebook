import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import HomePage from 'Pages/HomePage/HomePage';

function LogOutPage() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) return;
    navigate('/');
  }, [token, navigate]);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default LogOutPage;
