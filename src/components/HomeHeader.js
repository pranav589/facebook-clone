import React from 'react'
import './HomeHeader.css'
import {Link,useHistory} from "react-router-dom"


import {Avatar} from '@material-ui/core'

import {auth} from '../firebase'


function HomeHeader({user}){
 const history=useHistory('')
 {/*if the user is not logged in push him to the login page */}
  if(user===false){
    history.push('/login')
  }

 const logout=(e)=>{
  e.preventDefault()
  auth.signOut()
  history.push("/login")
 }


  return(
    <div className="homeHeader">
       <div className="homeHeader_left">
          <Link to="/">
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEVCZ7L///8qWKz6+vw+ZbE8Y7B5j8Ree7tKbLQvW62Jncvb4e9QcbY+ZLEyXa45YbCWp9Ds7/ZrhsDS2epXd7m3w9+Qos6drdPQ1+ni5/K/yeJkgL6Blsixvtzv8visudqjstZ7ksXH0OZohL+9yOH/Gkr+AAAD+0lEQVR4nO3dW3OqMBSG4QSCEoVExGOth9r+/9+4tdbZu7M7GqVhrZX53pveOTwDgpCEKv3VajItVSqV02V7hanLn61x3hjqDfu1TO2t2v4jbGaWepsiZGfNVTh2BfXWRKnw64uwcekcnt8zxe5TWNXUWxKtYnYW7h31dkTMzU/COtVj9JwptTqmeBr9m23VwlNvRNT8Um1SPkiVqgcqnZ9qP2Yq6i1ACCGEEEIIIYQQQmL6fBiY0NDfNVN775zNsqwoy1LV3mXnrHXWOe+LwohGF86qzWS/aptcf2vXrNvVcbtcLqZVZazM5/WmsNlgu9b3y3eNwKe9xhWjY4Duq0rakVrb2Ut+3yVWaLLN6hGeNKFxVXufJFhY2/3DPlFCN2yeAMoRmmz5jE+Q0D1wgZAoNG78JFCI0BRPfQXlCI0L+YUmWZg9fhWUJbTzDkAJQj/qAhQgNFUnoAChffo6IUToF92A7IXGdQSyF7pt6kLVFchd2H0XMhca2xnIXNj5RMpeaDv84hYh7Ppzhr/QH1IX/sZBylvY/WLIXOhfUxe6B+98m2Y9/r+SsfCBr2F+nAyN/SnOq+6MD955I2u9wMVZZhYIPFgvT3cu9EQzkDmQrc4rrsKAchdHupcQ4IfYPXg6lQaN9kpegR30kO1D7jGqVLYLEL5LXoOdBUy5yIVeJy6FCMeCzzNhQtFfwyDhQfQi7BDhQvLFIkj4mvw+fE1+H44gZB2EEPIPQgj5ByGE/IMQQv5BCCH/IISQR+ZGQUJ/6xMMg6XOwxtVAcLJ7NYnnCJ+q6UZ3jd0LUtd2CQvbGmHbnoQEg9O9SBc0g5s9CAcJS8c0o7z9yAknpkYX5gTj/PHF66TFx6JZzLEF86TF06Ix/njC9+I7x/jC6mnsccXUk+Zii5sqKe9RReST+yLLnxJ/igln9gXXUj+sDG6cEM9Rzq6kHzdWmxhTvugrQch+eUwupD63im+kH6ee2wh9b1TfCH9LPDYQvKLRXQh/cLZyMId+YkmtpD6UWJ8If3l8FR5Ix8wyv126xMU+dfwTiEzFQa3bo+4A7sL2QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0IIH4joFZl9CU2p3hMXTtWE5mDvS+gnakXznpe+hLZVOumj1Cit9J7kVTY9Ce38JNQVxTsk+xEWM30Wri3BgdqLsK53n0I9dv3vxT6Evl7ri1A3let7N8YXGrvZ6atQ633hil7/QVRcoam9LT8un/Il1PlqsSl/k3CnuMJyumyvn/IHstJMOhEjrRsAAAAASUVORK5CYII=" alt="facebook-logo" className="homeHeader_logo" height='30px'/>
          </Link>
       </div>
       <div className="homeHeader_search">
         <input type="text" placeholder="search"/>
         
       </div>
       <div className="homeHeader_icons">
         <section>
          <Avatar className="homeHeader_avatar" src=""/>
          <h3 className="homeHeader_name">{user && user.displayName}</h3>
         </section>
         <h3 className="homeHeader_dash">|</h3>
         <section className="homeHeader_name">
           <h3>Home</h3>
         </section>
         <h3 className="homeHeader_dash">|</h3>
         <section className="homeHeader_name">
            <h3>Find Friends</h3>
         </section>
            <h3 className="homeHeader_dash">|</h3>
          <section>
           <h3 className="homeHeader_name">Create</h3>
          </section>
          <h3 className="homeHeader_dash">|</h3>

          

          <section>
           <a onClick={logout}><p className='button'>Logout</p></a>
          </section>
          <h3 className="homeHeader_dash">|</h3>
       </div>
    </div>
  )
}

export default HomeHeader