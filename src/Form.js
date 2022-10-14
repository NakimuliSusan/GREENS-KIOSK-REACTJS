import React, {useState, useEffect} from "react";
import { Link, useNavigate} from 'react-router-dom';
import App from "./App";
import './form.css';
import Kiosk from "./Kiosk";
// import Fruits from "./Fruits";
import Products from "./Products";
const Form = () => {
 const navigate = useNavigate()
  const [name , setName] = useState('');
  console.log(name);
  const [email,setEmail] = useState('');
  console.log(email)
  const [password,setPassword] = useState('');
  console.log(password)
  
  useEffect(() =>{
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/products")
      
  };
  
  return (

    <div className="Login">

      <h2>Welcome to Greens Kiosk</h2>
  
      <form className="Form" onSubmit={handleSubmit}>
         <label for="firstName">Full Name</label> <br></br>
         <input type="text" name="fullname" id="fullname" placeholder="Full Name" required  onChange={(e)=>
          {setName(e.target.value)}}></input> <br></br>
         <label for="Email">Email</label> <br></br>
         <input type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>
          {setEmail(e.target.value)}}></input> <br></br>
         <label for="Password">Password</label> <br></br>
         <input type="password" name="password" id="password" placeholder="Password" required onChange={(e)=>
          {setPassword(e.target.value)}} ></input> <br></br> <br></br>
         <button type="submit" className="btn btn-login">Login</button>
    
      </form>
      {/* {<Kiosk name={name}/>} */}
      {/* {name?<Kiosk name={name}/>: "null"} */}

     

     
    </div>

  );

}
export default Form;

  

