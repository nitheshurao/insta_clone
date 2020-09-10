import React ,{useState,useEffect}from "react";

import "./App.css";
import VideCard from "./VideCard";
import dp from "./firebase";

function App() {
  const [reels, setReels]=useState([ ]);
  useEffect(() => {
    //App cpmont will run when it load
    dp.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map(doc => doc.data() ))
    ))
    
   
  }, [])
  return (
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="https://image.flaticon.com/icons/png/512/87/87390.png"
          alt=""
        />
        {/* image at top */}
        {/*  reel text */}
        <h1>Reet</h1>
      </div>
      <div className="app_videos">
        {/* container of to app vidos (scrollabel contar) */}
        {/* Video*/}
        {reels.map(({ channel,avatarScr, songs,liks,url,shars }) =>(  
        <VideCard
          channel={ channel}
          avatarScr={avatarScr}
          songs={songs}
          liks={liks}
          url={url}
          shars={shars}
        />
        ))}
       
      </div>
    </div>
  );
}

export default App;
