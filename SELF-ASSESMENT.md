 - Initially our SignupPage.jsx was not using email validation: 

  const success = await signup(newUser);

  if (success) {
    toast.success("User Added Successfully");
    navigate("/");
  }

- Now we have added simple checks for email: 

if (!email.includes("@") || (!email.endsWith(".com") && !email.endsWith(".fi"))) {
  toast.error("Please enter a valid email that include @ and ending in .com or .fi");
  return;
}

- We had an text input in dateofbirth: 
     <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          className="border rounded w-full py-2 px-3"
          placeholder="01/01/2000"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

- We decided to use Date picker and remove unnecessary fields: 
     <input
          type="date"
          id="dateOfBirth"
          className="border rounded w-full py-2 px-3"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />


---------------------------------------------

Log In:

1. Handle Loading State in UI

If loading is coming from useLogin, disabling the button while logging in to prevent multiple submissions would be recommended:

The button in jsx elemnet:

  type="submit" 
  className={`bg-indigo-600 text-white py-2 px-4 rounded mt-4 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
  disabled={loading}

  {loading ? "Logging in..." : "Log In"}



2. Better Error Handling

If useLogin can return errors, display them using toast.error:

const success = await login(logIn);
if (success) {
  toast.success("Logged In Successfully");
  navigate("/jobs");
} else {
  toast.error("Invalid credentials. Please try again.");
}

