import logo from './logo.svg';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload2 from './components/Upload2';
import logoo from "./components/Logo.png";


function App() {
  const adminUser={
    email:"phynd@admin.com",
    password:"admin"
  }

  const [user,setUser]=useState({email:""});
  const [error,setError]=useState("");

  const Login=details=>{
    if(details.email==adminUser.email && details.password==adminUser.password){
      setUser({
        email:details.email
      });
    }else if(details.email!="" && details.password!=""){
      if(details.email!=adminUser.email){
        setError("Email does not match");
      }
      else{
        setError("Password does not match");
      }
    }
    else{
      setError("Fields cannot be empty");
    }
  }
  const Logout=()=>{
    setUser({email:""});
    setError("");
  }

  return (
    <div >
      {(user.email!="")?(
        <div>
          <div>
            <div class="topnav">
              <div className="navLogo-container">
                <img src={logoo} className="navLogo" alt="Italian Trulli"/>
              </div>

            <a href="#about" onClick={Logout}>Logout</a>
            </div>
          </div>
          <Upload2/>
        </div>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
    </div>

  );
}

export default App;
