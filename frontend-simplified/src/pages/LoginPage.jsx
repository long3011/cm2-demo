import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logInUser = async (logIn) => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logIn),
      });
      if (!res.ok) {
        throw new Error("Failed to Log In");
      }
      return true;
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while Log In.");
      return false;
    }
  };

  const logInForm = async (e) => {
    e.preventDefault();

    const logIn = {
      email: email,
      password: password
    };

    const success = await logInUser(logIn);
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
