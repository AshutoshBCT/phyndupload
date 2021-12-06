import React,{useState} from "react";
import './LoginForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./Logo.png";
function LoginForm({Login,error}){
    const[details,setDetails]=useState({email:"",password:""});

    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
		<div id="login-div">
            <div class="login-page">
				<form class="login" onSubmit={submitHandler}>
                <div class="form">
						<img className="logoImg" src={logo}/>
						<input type="text" class="login__input" placeholder="User name / Email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
						<input type="password" class="login__input" placeholder="Password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
						<button type="submit" value="Login">Login</button>
                </div>
				</form>
            </div>
    	</div>
    )
}
export default LoginForm;