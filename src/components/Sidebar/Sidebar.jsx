import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { GoHome } from 'react-icons/go'
import { TbSection } from 'react-icons/tb'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BiLogOutCircle } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-logo__box'>
        <Link to='/' className='sidebar-logo'>
          <span className='logo-large'>T</span>utor
          <span className='logo-large'>C</span>hamps.</Link>
      </div>
      <div className="sidebar-link__box">
        <li className="sidebar-link active"><GoHome className='sidebar-icon' /> Home</li>
        <li className="sidebar-link"><TbSection className='sidebar-icon' /> Live Session</li>
        <li className="sidebar-link"><AiOutlineFundProjectionScreen className='sidebar-icon' /> Project Lab</li>
        <li className="sidebar-link"><CgProfile className='sidebar-icon' /> Profile</li>
        <li className="sidebar-link logout"><BiLogOutCircle className='sidebar-icon' /> LogOut</li>
      </div>
    </div>
  )
}

export default Sidebar