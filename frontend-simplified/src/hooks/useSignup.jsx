
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signup = async(userData) => { 
        setLoading(true)
        
try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      
  const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      toast.success("User signed up successfully!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };


    

  return {signup, loading}
}

export default useSignup