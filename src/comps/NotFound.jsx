import React from 'react'
import not_found from '../assets/not found.png'

function NotFound() {
  return (
    <div className="notfound">
        <img src={not_found} alt="404 Not Found"/>
    </div>
  )
}

export default NotFound