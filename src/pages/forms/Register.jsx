import { useState } from "react";
import "./forms.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";





const Register =()=>{
   
    const [email, setEmail] = useState("");
    const[userName,setUserName]=useState("")
  const [password, setPassword] = useState("");
 
 
  //form submit handler

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (userName.trim() === "") return toast.error("Username is required");
    if (password.trim() === "") return toast.error("Password is required");

    console.log({ email, password,userName });
  };


  return (
    <div className="form-wrapper">
      <ToastContainer />
      <h1 className="form-title">Create new account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />

<input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          placeholder="Password"
        />
        

        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
            Already have an account!?{" "}
        <Link to="/login" className="form-link">
         Login
        </Link>
      </div>
    </div>
  );
    
    
}


export default Register;