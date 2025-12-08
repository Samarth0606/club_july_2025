import React from 'react'
import Reff2 from './components/Reff2'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=>import('./components/Dashboard') )
// import About from './components/About'
const About = React.lazy( ()=>import('./components/About') )

function App() {
  const navigate = useNavigate() //fn
  function handleDashboard(){
    // window.location.href = "/dashboard"
    navigate("/dashboard")
  }
  function handleAbout(){
    // window.location.href = "/about"
    navigate("/about")
  }
  return (
    <div>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about'     element={<About />    } />
      </Routes>
      <button onClick={handleDashboard} >VISIT DASHBOARD</button>
      <Link to='/dashboard'>VISIT DASHBOARD</Link>
      <button onClick={handleAbout} >VISIT ABOUT</button>
      <Link to='/about'>VISIT ABOUT</Link>
      {/* <Reff2 /> */}
    </div>
  )
}

export default App