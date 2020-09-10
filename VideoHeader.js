import React from 'react'
import './VideoHeader.css'
//import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
function VideoHeader() {
    
    return (
        <div className="VideoHeader">
            < ArrowBackIosIcon/>
            <h1>reel</h1>
            <CameraAltIcon/>
        </div>
    )
}

export default VideoHeader
