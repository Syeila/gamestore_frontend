import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const navigate = useNavigate(); // Menggunakan useNavigate

  useEffect(() => {
    if(localStorage.getItem('token')) {
        navigate('/dashboard'); // Mengganti history.push dengan navigate
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password
      });
      console.log('Response:', response.data);
      localStorage.setItem('token', response.data.accessToken);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      if (error.response && error.response.data) {
        setValidation(error.response.data);
      } else {
        setValidation({ message: 'An unexpected error occurred.' });
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col md:flex-row w-full">
        {/* Bagian Kiri: Gambar atau Logo Game */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center h-full bg-black bg-opacity-50">
          <img 
            className="w-full h-full object-cover opacity-70 shadow" 
            src="/public/foto/login.jpg" 
            alt="Game Logo"
          />
        </div>

        {/* Bagian Kanan: Formulir */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900 bg-opacity-75 py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full sm:w-full sm:max-w-md text-white">
            <h2 className="mt-6 text-center text-3xl font-extrabold leading-9 tracking-tight">
              Sign in to your account
            </h2>
            <div className="mt-8">
              <form className="space-y-6" onSubmit={loginHandler}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="text-white block w-full rounded-md border-0 py-2 px-4 text-gray-900 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="text-white block w-full rounded-md border-0 py-2 px-4 text-gray-900 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
