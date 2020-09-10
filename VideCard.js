import React ,{ useRef ,useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'
function VideCard({ channel,avatarScr,songs,liks,shars,url}) {
    const[isVideoPlaying, setVideoPlaying]= useState(false);
        useState(false);
    const videoRef = useRef(null)


//useref
const onVideoPress=() => {
if(isVideoPlaying){
    //stop vdo
    videoRef.current.pause();
    setVideoPlaying(false);
}else{
    //sart vdo
    videoRef.current.play();
    setVideoPlaying(true);
}
}


    return (
        <div className='videoCard'>
            <VideoHeader />
            
 
 <iframe  width="100%" height="100%" src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
    
  <VideoFooter
    channel={channel}
    avatarScr={avatarScr}
    songs={songs}
    liks={liks}
  
    shars={shars}
  />
     </div>
     
    )    
}

export default VideCard
