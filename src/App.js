import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
import NavigationBar from "./components/NavigationBar"
import MainPage from "./components/MainPage/MainPage"
import BlogList from "./components/BlogsList"
import Blog from "./components/Blog"
import { initializeBlogs } from "./reducers/blogsReducer"

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/blogs/:id' element={<Blog />} />
        <Route path='/blogs' element={<BlogList />} />
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<div>Nothing up here... Yet</div>} />
      </Routes>
      <hr />
      <Footer />
    </div>
  )
}

export default App
