import React from 'react'
import "./youtube.css"

const Youtube2 = () => {
  return (
    <div className="custom-youtube-player">
        <iframe 
        id="player" 
        type="text/html" 
        style={{ width:"100%", height:"100%" }}
        src="https://www.youtube.com/embed/dJlFmxiL11s"
        frameborder="0"> 
        </iframe>
        <div className="close d-flex justify-content-center">
            <i className="fas fa-times"></i>
        </div>
        <div className="handle d-flex justify-content-center">
            <i className="fas fa-arrows-alt "></i>
        </div>
    </div>
  )
}

export default Youtube2