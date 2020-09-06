import React,{useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'

function Login(){
  const [email,setEmail]=useState("")
  const history=useHistory("")
  const [password,setPassword]=useState("")
 
 const login=(e)=>{
   e.preventDefault();
   auth.signInWithEmailAndPassword(email,password).then((auth)=>{
     console.log(auth)
     history.push('/')
   }).catch((error)=>{
     if(error.message==="The password is invalid or the user does not have a password."){
       alert("Please check your email and password")
     }
     if(error.message==="There is no user record corresponding to this indentifier. The user may have been deleted."){
       alert("Create a account")
     }else{
       alert(error.message)
     }
   })
   
 }

  return(
    <div className='login'>
       <div className='login_container'>
         <h3>Log In To Facebook</h3>
         <form>
           <center>
             <input type="email" placeholder="Email Address" onChange={e=>setEmail(e.target.value)} />
           </center>
           <center>
           <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/></center>
           <center>
           <button type="submit" className="login_button" onClick={login}>Log In</button>
           </center>
           <center>
            <h6>Forgot Password</h6>
           </center>
           <center><hr/></center>
           <center>
           <Link to="/register">
            <button className="login_createNewAccount">Create New Account</button>
           </Link>
           </center>
         </form>
       </div>
    </div>
  )
}

export default Login