import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {

  const [registerData,setRegisterData]=useState({
    username:'',
    password:'',
  })



  const handleRegSubmitChange = (e) => {
    const {name,value} =e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }))
    

  }


  const handleRegSubmit=async(e) => {
e.preventDefault();
try{
 const response=await axios.post('http://localhost:8080/register',registerData);
console.log(response.data);
}
catch(err) {console.log(err);

  }
  setRegisterData({
    username:'',
    password:''
  })
}
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegSubmit}>
<input type="text" name='username' placeholder="enter username" value={registerData.username} onChange={handleRegSubmitChange} required/>
<input type="password" name='password' placeholder="enter password" value={registerData.password} onChange={handleRegSubmitChange} required/>
<button type='submit'>Register</button>

      <p>Already registered?
        <Link to='/Login'>Login here</Link>
      </p>
      
      </form>
    </div>
  )
}


export default Register