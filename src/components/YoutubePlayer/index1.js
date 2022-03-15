import React from 'react'
import "./youtube.css"

const Youtube = () => {
  const videoId = "";
  return (
    <div className="custom-youtube-player">
        <iframe 
        id="player" 
        type="text/html" 
        style={{ width:"100%", height:"100%" }}
        src="https://www.youtube.com/embed/YqFPuxCq0g4"
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

export default Youtube