import React from 'react'
import './SideBar2.css'


function SideBar2(){
  return(
    <div className='sidebar2'>
        <div className='sidebar2_languages'>
            <p className='sidebar2_selected'>English (UK)</p>
             <p >English (US)</p>
             <p>Hindi</p>
             <p>Marathi</p>
        </div>
        <div className='sidebar2_policies'>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Advertising</p>
            <p>AdChoices</p>
            <p>Cookies</p>
            <p>More</p>
        </div>
        <p className='copyright'>Facebook-Copyright-2020</p>
    </div>
  )
}

export default SideBar2
