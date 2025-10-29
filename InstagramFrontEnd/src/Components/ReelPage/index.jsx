import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import sampleVideo from "../../assets/sample-video.mp4";
import heartIcon from "../../assets/Images/heart.png";
import chatIcon from "../../assets/Images/chat.png";
import dotsIcon from "../../assets/Images/dots.png";
import saveIcon from "../../assets/Images/save-instagram.png";
import home from "../../assets/Images/home.png";
import reel from "../../assets/Images/video.png";
import search from "../../assets/Images/magnifying-glass.png";

const Reels = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) video.play();
    else video.pause();
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleLike = () => setLiked(!liked);

  return (
    <div className="reels-container">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={sampleVideo}
        className="reel-bg"
        loop
        muted
        playsInline
        onClick={togglePlay}
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Activity Buttons */}
      <div className="activity">
        <button className="activity-btn" onClick={toggleLike}>
          <img
            src={heartIcon}
            alt="like"
            className={`icon ${liked ? "liked" : ""}`}
          />
        </button>
        <button className="activity-btn">
          <img src={chatIcon} alt="comment" className="icon" />
        </button>
        <button className="activity-btn">
          <img src={saveIcon} alt="save" className="icon" />
        </button>
        <button className="activity-btn">
          <img src={dotsIcon} alt="menu" className="icon" />
        </button>
      </div>

      {/* Profile + Caption */}
      <div className="profile-section">
        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="profile-pic"
          />
          <p className="username">mi_tuza_tu_mazi</p>
          <button className="follow-btn">Follow</button>
        </div>
        <p className="caption">
          Just living in moments that feel like movies. No plans, no filters,
          just raw vibes caught in motion 🎬✨ Sometimes all you need is good
          light, good music, and a little chaos to make life reel-worthy. 💫
          #ReelLife #AestheticVibes #JustVibing #CinematicFeel #MoodReel
          #LifeInMotion
        </p>
      </div>

      {/* Bottom Toolbar */}
      <div className="bottom-toolbar">
        <button className="toolbar-btn active">
          <img src={home} alt="home" />
        </button>
        <button className="toolbar-btn">
          <img src={search} alt="search" />
        </button>
        <button className="toolbar-btn">
          <img src={reel} alt="reel" />
        </button>
        <button className="toolbar-btn">👤</button>
      </div>
    </div>
  );
};

export default Reels;
