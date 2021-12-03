import logo from './logo.svg';
import React,{useState} from 'react';
import LoginForm from './components/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload2 from './components/Upload2';
import color from "./color.jpg";


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
    }else{
    }
  }
  const Logout=()=>{
    setUser({email:""});
  }

  return (
    <div >
      {(user.email!="")?(
        <div>
          <div>
            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
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
