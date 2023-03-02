import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { getCurrentUserRequest } from 'redux/authOperations';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyHomepage = lazy(() => import('../Pages/HomePage/HomePage'));
const LazyContactsPage = lazy(() =>
  import('../Pages/ContactsPage/ContactsPage')
);
const LazyRegisterPage = lazy(() =>
  import('../Pages/RegisterPage/RegisterPage')
);
const LazyLoginPage = lazy(() => import('../Pages/LoginPage/LoginPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomepage />} />
          <Route path="/register" element={<LazyRegisterPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
          <Route path="/contacts" element={<LazyContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
