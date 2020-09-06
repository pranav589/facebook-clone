import React,{useState} from "react";
import "./style.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginHeader from './components/LoginHeader'
import Login from './components/Login'
import RegisterHeader from './components/RegisterHeader'
import Register from './components/Register'
import HomeHeader from './components/HomeHeader'
import {auth} from './firebase'
import SideBar from './components/SideBar'
import SideBar2 from './components/SideBar2'
import Post from './components/Post'

export default function App() {
  const [user,setUser]=useState([])
 {/*when the user is logged in give the users credentials and set it to seUser */}
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      setUser(authUser)
    }else{
      setUser(false)
    }
  })

  return (
    <div className="app">
      <BrowserRouter>
         <Switch>
           <Route path="/login" exact>
            <LoginHeader/>
            <Login/>
           </Route>
           <Route path="/register" exact>
            <RegisterHeader/>
            <Register/>
           </Route>
         </Switch>
         <Route path="/" exact>
            <HomeHeader user={user}/>
            <div className='app_page'>
            <SideBar user={user}/>
            <div className='app_posts'>
            <Post user={user}/>
            </div>
            <SideBar2/>
            </div>
         </Route>
      </BrowserRouter>
    </div>
  );
}
