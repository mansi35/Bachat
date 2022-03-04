import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.user);

  if (user) {
    return <Component {...rest} />;
  }
  return (
    <Navigate to={
      {
        pathname: '/auth',
      }
    }
    />
  );
}

export default ProtectedRoute;
