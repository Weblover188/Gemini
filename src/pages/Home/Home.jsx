import React from 'react'
import '../Home/Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Main from '../../components/Main/Main'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <Main />
      
    </div>
  )
}

export default Home
