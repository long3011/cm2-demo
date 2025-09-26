import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useLogin from '../hooks/useLogin';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loading } = useLogin();
  const navigate = useNavigate();

  
  const logInForm = async (e) => {
    e.preventDefault();

    const logIn = {
      email: email,
      password: password
    };

    const success = await login(logIn);
    if (success) {
      toast.success("Logged In Successfully");
      navigate("/jobs");
    }
  };

  return (
    <div>
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={logInForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">Log In</h2>

              <div className="mb-4">
                <input
                  id="email"
                  placeholder="email"
                  value={email}
                  name="email"
                  className="border rounded w-full py-2 px-3"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={password}
                  name="password"
                  className="border rounded w-full py-2 px-3 mt-2"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded mt-4 w-full">
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
