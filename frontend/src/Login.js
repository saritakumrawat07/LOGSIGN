import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
const [loginData,setLoginData] =useState({
    username:'',
    password:'',
})

const handleSubmit =async(e) => {
e.preventDefault();

try{
    const response = await axios.post('http://localhost:8080/login',loginData);
    const {success,message} = response.data;
    if(success){
        console.log('Login successful')
    }else{
console.log(message);
    }
}catch(error){
    console.log('Login failed',error)
}
setLoginData({username:'',password:''})

}

const handleChange = (e) => {
const {name,value} = e.target;
setLoginData((prevData)=>({
    ...prevData,
    [name]:value
}))
}
  return (
    <div>

<h1>Login Page</h1>
<form onSubmit={handleSubmit}>
<input type="text" name='username'placeholder='enter username' value={loginData.username} onChange={handleChange} required/><br/><br/>

<input type="text" name='password'placeholder='enter password' value={loginData.password} onChange={handleChange} required/><br/><br/>

<button type="submit">Login</button>
<p>Not Registered yet?
    <Link to='/Register'>Register here</Link>
</p>
</form>
    </div>
  )
}

export default Login