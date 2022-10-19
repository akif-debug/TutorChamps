import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Routes>
          <Route exact path='/'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
