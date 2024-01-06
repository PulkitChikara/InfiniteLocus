import React, { useState } from 'react';
import axios from 'axios'; // Import axios

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add authentication logic here
    try {
      const response = await axios.post(
        `http://localhost:3000/users/createSession`,
        { email: username, password: password }
      );

      if (response.data.email) {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
        // navigate("/dashboard"); // You may need to import navigate from your router
      } else {
        // email and password don't match
        // Handle the error or display a message to the user
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    // For demonstration purposes, log the credentials to the console
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
