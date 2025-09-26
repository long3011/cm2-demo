import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [gender, setGender] = useState("Male");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("Employer");
 
  const navigate = useNavigate();


  const addUser = async(newUser) => {

    try{
    const response = await fetch("/api/users/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newUser),
    })
    const data = await response.json()
    console.log("server response", data)
    if (!response.ok){
      throw new Error("Failed to add user")
    }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the user.");
      return false;
    }
    return true;
  }


  
  const submitForm = async(e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      phone_number:phoneNumber,
      gender,
      date_of_birth: dateOfBirth,
      membership_status: membershipStatus

    };

   
  const success = await addUser(newUser);

  if (success) {
    toast.success("User Added Successfully");
    navigate("/");
  }
};

  

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Sign up</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Your name here"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Your email here"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Strong Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Phone Number
              </label>
            <input
                id="phonenumber"
                name="phonenumber"
                type="text"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder=" +358 123456789"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Gender
              </label>
                <select
                id='gender'
                name='gender'
                className='border rounded w-full py-2 px-3'
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                
              </select>
            </div>


            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Date Of birth
              </label>
              <input
                type="text"
                id="dateOfBirth"
                name="dateOfBirth"
                className="border rounded w-full py-2 px-3"
                placeholder="01/01/2000"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Membership Status
              </label>
              <select
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={membershipStatus}
                onChange={(e) => setMembershipStatus(e.target.value)}
              >
              <option value="Employer">Employer</option>
              <option value="Developer">Developer</option>

              </select>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddJobPage;
