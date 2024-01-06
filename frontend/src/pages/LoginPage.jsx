// src/components/Login.jsx
import React, { useState } from 'react';

const LoginPage = ({setIsLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if username and password are correct
    if (username === 'CODE' && password === 'CODE') {
      // Set the user as logged in
      setIsLogin(true);
  
      // Save user information to localStorage
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));
  
      // Redirect to the Board page
      history.push('/board');
    } else {
      // Handle incorrect credentials
      alert('Invalid username or password');
    }
  };

  return (
    <div className='w-full min-h-screen flex justify-center mt-32'>
        <div className='min-w-[400px] flex h-fit flex-col items-center justify-center bg-white px-8 py-12 gap-2 rounded-lg text-xl'>
            <div className='w-full flex flex-col items-start gap-2'>
                <div>Name</div>
                <input type='text' className='w-full text-lg px-2 py-1 rounded-md border' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='w-full flex flex-col items-start gap-2'>
                <div>Password</div>
                <input type='text' className='w-full text-lg px-2 py-1 rounded-md border' placeholder='Username' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='w-full mt-2'>
                <button onClick={handleLogin} className='bg-blue-600 w-full rounded-md py-2 text-white font-semibold'> LOGIN</button>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;
