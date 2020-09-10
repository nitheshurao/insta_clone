import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SendIcon from "@material-ui/icons/Send";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import Ticker from "react-ticker";
function VideoFooter({ channel, avatarScr, songs, liks, shars }) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <Avatar src={avatarScr} />
        <h3>
          {channel} -<Button>Follow</Button>
        </h3>
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon"></MusicNoteIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <h1>{songs}</h1>
              </>
            )}
          </Ticker>
        </div>
        <div className="videoFooter_actions ">
          <div className="videoFooter_actionLeft">
            <FavoriteIcon fontSize="large" />
            <ModeCommentIcon fontSize="large" />
            <SendIcon fontSize="large" />
            <MoreHorizIcon fontSize="large" />
          </div>
          <div className="videoFooter_actionsRight ">
            <div className="videoFooter_stat">
              <ModeCommentIcon />
              <p>{liks}</p>
            </div>
            <div className="videoFooter_stat">
              <ModeCommentIcon />
              <p>{shars}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
