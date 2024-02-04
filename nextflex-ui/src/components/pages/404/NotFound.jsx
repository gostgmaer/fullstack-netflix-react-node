import React from 'react'
import "./not-found.scss";
const NotFound = () => {
  return (
    <div className="not-found">
    <div className="container">
      <div className="content">
        <h1 className="heading">404 - Page Not Found</h1>
        <p className="subtext">Oops! The page you are looking for could not be found.</p>
        <a href="/" className="back-link">Return to Home</a>
      </div>
    </div>
  </div>
  )
}

export default NotFound