import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const BlogList = props => {
  return (
    <div>
      {props.blogs.map(blog => (
        <p>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </p>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
  }
}

export default connect(mapStateToProps)(BlogList)
