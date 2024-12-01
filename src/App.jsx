import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Analyze from "./components/Analyze"
import About from "./components/About"
import Sample from "./components/Sample"
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/analyze" element={<Analyze></Analyze>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/sample" element={<Sample></Sample>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App