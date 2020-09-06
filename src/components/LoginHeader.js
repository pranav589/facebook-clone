import React from 'react'
import  './LoginHeader.css'
import {Link} from 'react-router-dom'

function LoginHeader(){
  return(
    <div className="header">
       <Link className="link" to="/">
          <img src="https://i.ibb.co/WzybLQK/del.png" alt="facebook-logo" className="header_logo"/>
       </Link>
    </div>
  )
}

export default LoginHeader