import React from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'

const Home = () => {
  return (
    <div className='container-fluid home-container'>
      <div className="row">
        <div className="col-lg-3 home-col"><Sidebar /></div>
        <div className="col-lg-9 home-col"><Content /></div>
      </div>
    </div>
  )
}

export default Home