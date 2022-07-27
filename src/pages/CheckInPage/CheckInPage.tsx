import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckInForm from '../../components/CheckInForm/CheckInForm';

import './CheckInPage.css';

const CheckInPage = () => {
  const login = localStorage.getItem('login');
  const navigate = useNavigate();

  useEffect(() => {
    if (login) navigate('/search');
  }, [login]);

  return (
    <>
      <div className="login-page-background" />
      <CheckInForm />
    </>
  );
};

export default CheckInPage;
