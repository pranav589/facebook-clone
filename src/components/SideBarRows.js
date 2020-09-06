import React from 'react'
import './SideBarRows.css'

function SideBarRows({selected,ImageLink,title,avatar}){
  return(
    /*if selected is present as a prop add a class selected and same for avatar */
    <div className={`sideBarRow ${selected && "selected"} ${avatar && "avatar"}`}>
        <div className='colorwrap'>
        <img src={ImageLink} alt="" className={`sideBarRow_icon ${avatar && "avatar"}`}/>
        <h2 className={`sideBarRow_title ${avatar && 'avatar'}`}>{title}</h2>
        </div>
    </div>
  )
}

export default SideBarRows
