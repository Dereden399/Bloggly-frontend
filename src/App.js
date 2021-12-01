import React from "react"
import { Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import MainPage from "./components/MainPage/MainPage"

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/blogs' element={<div>Blogs</div>} />
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<div>Nothing up here... Yet</div>} />
      </Routes>
      <hr />
      <Footer />
    </div>
  )
}

export default App
