import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './RegisterHeader.css'

import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'


function RegisterHeader(){
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
    <div className="header">
        <div className="header_left">
           <Link to="/">
              <img src="https://i.ibb.co/WzybLQK/del.png" alt="facebook-logo" className="header_logo"/>
           </Link>
           </div>
          <div className="header_right">
           <form>
             <input type="email" placeholder="Email" className="header_inputEmail" onChange={e=>{setEmail(e.target.value)}}/>
             <input type="password" placeholder="Password"className="header_inputPassword" onChange={e=>{setPassword(e.target.value)}}/>
             <button type="submit" className="header_submit" onClick={login}>Log In</button>
              </form>
          
        </div>
    </div>
  )
}


export default RegisterHeader