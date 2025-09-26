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