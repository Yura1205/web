import '../style/login.css';
import React, { useState } from 'react';
import avatar from "../assets/avatar.svg";



export const LoginForm = () => {
  
	const [usuario, setUsuario] = useState("");
	const [password, setPassword] = useState("");
  
	const inicioSesion =(e)=>{
	  e.preventDefault()
	  console.log("Llegó")
	  console.log("Usuario: ",usuario)
	  console.log("Password: ", password)
  
	}
	
	return (
    <div className="login-content">
			<form action="index.html">
				<img src={avatar} alt="Avatar"/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input" onChange={(e)=>{setUsuario(e)}}/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input" onChange={(e)=>{setPassword(e)}}/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" onClick={(e)=>inicioSesion(e)} value="Login"/>
            </form>
        </div> 
  )
}
