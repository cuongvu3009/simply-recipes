import React from "react"

const Footer = () => {
  return (
    <div className="page-footer">
      <p>&copy; {new Date().getFullYear()}</p>
      <span>Simply Recipes - Built with Gatsby</span>
    </div>
  )
}

export default Footer
