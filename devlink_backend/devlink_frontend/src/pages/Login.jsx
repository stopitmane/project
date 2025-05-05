import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const fakeLogin = () => {
    localStorage.setItem('access_token', 'mock-token');
    navigate('/issues');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to DevLink Tracker</h1>
      <button
        onClick={fakeLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Login to Continue
      </button>
    </div>
  );
};

export default Login;
