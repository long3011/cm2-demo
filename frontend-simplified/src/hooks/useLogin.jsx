
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async(userData) => { 
        setLoading(true)
        
        try {
            const res = await fetch("/api/users/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            });
            if (!res.ok) {
              throw new Error("Failed to Log In");
            }

            if (data.token) localStorage.setItem("token", data.token);
            if (data.user) localStorage.setItem("user", JSON.stringify(data.user));  // AI recommended to add token and user to stroage      
       
            navigate("/");
          } catch (error) {
            console.error(error);
            toast.error("An error occurred while Log In.");
            return false;
          }
    };


    

  return {login, loading}
}

export default useLogin