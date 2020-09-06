import React,{useState} from 'react'
import './Register.css'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'

function Register(){
  const history=useHistory("");
  const [firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  
 const register=(e)=>{
   e.preventDefault()
   auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
     if(auth.user){
       auth.user.updateProfile({
         displayName:firstName + " " + lastName
       }).then((e)=>{
         history.push("/")
       }
       )
     }
   }).catch((e)=>{
     alert(e.message)
   })
 }

  return(
    <div className="register">
      <div className="register_container">
         <h1>Create A New Account</h1>
         <h3>Its quick and easy</h3>
         <form>
           <center>
              <input type="text" className="register_name" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
              <input type="text" className="register_name" placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />

           </center>

           <center>
            <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
           </center>
           <center>
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
           </center>
           <h5 className="register_gender">Gender</h5>
           <div className="register_radioContainer">
             <input type="radio" name="gender" value="Male"/>
             <label>Male</label>
             <input type="radio" value="Female" name="gender"/>
             <label>Female</label>
             <input type="radio" value="Other" name="gender"/>
             <label>Other</label>
           </div>
           <p className="register_policy">
            By clicking Sign Up, you agree to our {" "} <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You may receive SMS notifications from us and can opt out at any time.
           </p>
           <center>
              <button type="submit" className="register_button" onClick={register}>Register</button>
           </center>
         </form>
      </div>
    </div>
  )
}


export default Register