import React, { useState } from 'react';
import './App.css';
import {Link, Element} from 'react-scroll';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Media from './components/Media';
import Subscribe from './components/Subscribe';

var heroDiv = {
  textAlign: "center",
  position: "relative",
  marginTop: "3em",
  top: "50px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  opacity: "1",
  fontFamily: "Oswald, sans-serif",
  transition: ".5s opacity ease"
}

var opaque = {
  backgroundColor: "rgba(35, 38, 50, 0.5)",
  height: "100%",
  width: "100%"
}

var items = {
  margin: "0 10px",
  textDecoration: "none",
  color: "white",
  cursor: "pointer"
}

function App() {
  const [trackLink, setTrackLink] = useState("https://app.kajabi.com/podcasts/medias/2147769447.mp3")
  const [vidLink, setVidLink] = useState("https://fast.wistia.net/embed/iframe/dd8jwtpt54?videoFoam=true")

  const handleClick = (num) => {
    if (num === 1) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675359.mp3");
    } else if (num === 2) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675361.mp3");
    } else if (num === 3) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675364.mp3");
    } else if (num === 4) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675367.mp3");
    } else if (num === 5) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675378.mp3");
    } 
    else if (num === 6) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675364.mp3");
    } else if (num === 7) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675364.mp3");
    } else if (num === 8) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147675364.mp3");
    } else if (num === 9) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147684074.mp3");
    } else if (num === 10) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147699123.mp3");
    } else if (num === 11) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147703258.mp3");
    } else if (num === 12) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147703259.mp3");
    } else if (num === 13) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147703260.mp3");
    } else if (num === 14) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147703263.mp3");
    } else if (num === 15) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147703266.mp3");
    } else if (num === 16) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147722917.mp3");
    } else if (num === 17) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147722918.mp3");
    } else if (num === 18) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147722920.mp3");
    } else if (num === 19) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147722921.mp3");
    } else if (num === 20) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147727777.mp3");
    } else if (num === 21) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147727778.mp3");
    } else if (num === 22) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147727781.mp3");
    } else if (num === 23) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147737491.mp3");
    } else if (num === 24) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147737492.mp3");
    } else if (num === 25) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147737493.mp3");
    } else if (num === 26) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147737494.mp3");
    } else if (num === 27) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147752316.mp3");
    } else if (num === 28) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147755844.mp3");
    } else if (num === 28) {
      setTrackLink("https://app.kajabi.com/podcasts/medias/2147769447.mp3");
    }
  };

  const handleVidClick = (num) => {
    if (num === 1) {
      setVidLink("https://fast.wistia.net/embed/iframe/wg2kqa2vgf?videoFoam=true");
    } else if (num === 2) {
      setVidLink("https://fast.wistia.net/embed/iframe/003gwiiqq0?videoFoam=true");
    } else if (num === 3) {
      setVidLink("https://fast.wistia.net/embed/iframe/rj1yw554ap?videoFoam=true");
    } else if (num === 4) {
      setVidLink("https://fast.wistia.net/embed/iframe/idu1w3iwv4?videoFoam=true");
    } else if (num === 5) {
      setVidLink("https://fast.wistia.net/embed/iframe/aadyfj3nm1?videoFoam=true");
    } else if (num === 6) {
      setVidLink("https://fast.wistia.net/embed/iframe/nssvkmxje1?videoFoam=true");
    } else if (num === 7) {
      setVidLink("https://fast.wistia.net/embed/iframe/lz4q1rlgu7?videoFoam=true");
    } else if (num === 8) {
      setVidLink("https://fast.wistia.net/embed/iframe/2ca4wp9iti?videoFoam=true");
    } else if (num === 9) {
      setVidLink("https://fast.wistia.net/embed/iframe/1em62b0jdo?videoFoam=true");
    } else if (num === 10) {
      setVidLink("https://fast.wistia.net/embed/iframe/wqurvfavep?videoFoam=true");
    } else if (num === 11) {
      setVidLink("https://fast.wistia.net/embed/iframe/xm6l7m1n5k?videoFoam=true");
    } else if (num === 12) {
      setVidLink("https://fast.wistia.net/embed/iframe/0vf5icfq7a?videoFoam=true");
    } else if (num === 13) {
      setVidLink("https://fast.wistia.net/embed/iframe/91n27uzu6l?videoFoam=true");
    } else if (num === 14) {
      setVidLink("https://fast.wistia.net/embed/iframe/f8p75olfhk?videoFoam=true");
    } else if (num === 15) {
      setVidLink("https://fast.wistia.net/embed/iframe/cvuak1db1m?videoFoam=true");
    } else if (num === 16) {
      setVidLink("https://fast.wistia.net/embed/iframe/imweltpxr2?videoFoam=true");
    } else if (num === 17) {
      setVidLink("https://fast.wistia.net/embed/iframe/8h5hkz7z3l?videoFoam=true");
    } else if (num === 18) {
      setVidLink("https://fast.wistia.net/embed/iframe/4p9fggzvme?videoFoam=true");
    } else if (num === 19) {
      setVidLink("https://fast.wistia.net/embed/iframe/3f08g4l7o9?videoFoam=true");
    } else if (num === 20) {
      setVidLink("https://fast.wistia.net/embed/iframe/iihk020g02?videoFoam=true");
    } else if (num === 21) {
      setVidLink("https://fast.wistia.net/embed/iframe/xfuhgumyu0?videoFoam=true");
    } else if (num === 22) {
      setVidLink("https://fast.wistia.net/embed/iframe/gsbkbibpne?videoFoam=true");
    } else if (num === 23) {
      setVidLink("https://fast.wistia.net/embed/iframe/wzr4baroid?videoFoam=true");
    } else if (num === 24) {
      setVidLink("https://fast.wistia.net/embed/iframe/ixf46yccd5?videoFoam=true");
    } else if (num === 25) {
      setVidLink("https://fast.wistia.net/embed/iframe/n0o2u2vqiq?videoFoam=true");
    } else if (num === 26) {
      setVidLink("https://fast.wistia.net/embed/iframe/agnrkwdtet?videoFoam=true");
    } else if (num === 27) {
      setVidLink("https://fast.wistia.net/embed/iframe/s8mbm3ule1?videoFoam=true");
    } else if (num === 28) {
      setVidLink("https://fast.wistia.net/embed/iframe/tf2kqui9n2?videoFoam=true");
    } else if (num === 28) {
      setVidLink("https://fast.wistia.net/embed/iframe/dd8jwtpt54?videoFoam=true");
    }
  };

  return (
    <div className="App" style={{scrollBehavior: "smooth"}}>
      <Link activeClass="active" spy={true} smooth={true} duration={500} style={{color: "white", cursor: "pointer", padding: "10px", borderRadius: "10px", backgroundColor: "rgba(0,0,0,0.5)", bottom: "20px", right: "20px", position: "fixed"}} to="home">
        ↑ Back to Top
      </Link>
      <div class="heroImg">
        <div style={opaque}>
          <Element name="home" style={heroDiv}>
            <h1 class="title" style={{margin: "-40px 0 10px 0"}}>SuccessMoneyMarriage</h1>
            <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="home">Home</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="episodes">Episodes</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="about">About</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="media">Media</Link>
              <Link activeClass="active" spy={true} smooth={true} duration={500} style={items} to="photos">Photos</Link>
              <Subscribe />
            </div>
            {/* <div style={{display: "flex", alignContent: "flex-end", justifyContent: "center", alignSelf: "flex-end"}}>
            <div style={{width: "50em", height: "1em", backgroundColor: "#ffffff"}}>h</div></div> */}
          </Element>
        </div>
      </div>
      <div style={{scrollBehavior: "smooth"}}> {/* adjust height in next two lines */}
      <Element name="episodes" style={{backgroundColor: "rgba(35, 38, 50)", marginTop: "-6em", display: "flex", justifyContent: "center", height: "200em"}}>
        <div style={{backgroundColor: "#ffffff", paddingTop: "10px", width: "50em", height: "195em", color: "black", zIndex: "2"}}>
        <h1 style={{fontFamily: "Oswald, sans-serif", fontWeight: "400"}}>Watch the show:</h1>
          <div id="video" style={{width: "90%", margin: "auto"}}>
            <div className="wistia_responsive_padding" style={{padding: "56.25% 0 0 0", position: "relative"}}><div className="wistia_responsive_wrapper" style={{height: "100%", left: "0", position: "absolute", top: "0", width: "100%"}}>
            <iframe src={vidLink} title="20130109-tdy_klg_hrpt_ NY Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width="100%" height="100%"></iframe></div></div>
            <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script><br/>
          </div>
          <div onClick={() => handleVidClick(1)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 1: Introduction</div>
          <div onClick={() => handleVidClick(2)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 2: Building a Relationship While Building a Business</div>
          <div onClick={() => handleVidClick(3)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 3: How to Fight Fair in Business</div>
          <div onClick={() => handleVidClick(4)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 4: Money</div>
          <div onClick={() => handleVidClick(5)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 5: Having Escape Time</div>
          <div onClick={() => handleVidClick(6)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 6: Who Makes the Final Decision?</div>
          <div onClick={() => handleVidClick(7)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 7: How to Fight Fair in Business</div>
          <div onClick={() => handleVidClick(8)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 8: Who's Working Harder?</div>
          <div onClick={() => handleVidClick(9)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 9: Patience and Forgiveness</div>
          <div onClick={() => handleVidClick(10)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 10: Negotiating Massive Success</div>
          <div onClick={() => handleVidClick(11)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 11: How Money Works</div>
          <div onClick={() => handleVidClick(12)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 12: The Time Value of Money</div>
          <div onClick={() => handleVidClick(13)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 13: Living an Unrestricted Existence</div>
          <div onClick={() => handleVidClick(14)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 14: The Rule of 72</div>
          <div onClick={() => handleVidClick(15)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 15: What to Teach Your Kids About Money</div>
          <div onClick={() => handleVidClick(16)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 16: Listening to Your Spouse/Partner</div>
          <div onClick={() => handleVidClick(17)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 17: Taking Time To Reconnect</div>
          <div onClick={() => handleVidClick(18)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 18: Building Each Other Up</div>
          <div onClick={() => handleVidClick(19)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 19: Exploring Shared Values</div>
          <div onClick={() => handleVidClick(20)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 20: Spending and Investing as a Couple</div>
          <div onClick={() => handleVidClick(21)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 21: 10 Things</div>
          <div onClick={() => handleVidClick(22)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 22: The More The Merrier</div>
          <div onClick={() => handleVidClick(23)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 23: Recognition</div>
          <div onClick={() => handleVidClick(24)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 24: Johnny Depp v. Amber Heard</div>
          <div onClick={() => handleVidClick(25)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 25: Roe v. Wade</div>
          <div onClick={() => handleVidClick(26)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 26: Assessing Your Strengths and Weaknesses</div>
          <div onClick={() => handleVidClick(27)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 27: Communication</div>
          <div onClick={() => handleVidClick(28)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 28: Building Credibility</div>
          <div onClick={() => handleVidClick(29)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 29: Should the Rules of Marriage be Rewritten?</div>
          <h1 style={{fontFamily: "Oswald, sans-serif", fontWeight: "400", marginBottom: "0"}}>or Listen to the show:</h1>
          <div style={{marginBottom: "15px"}}>
            <a href="https://open.spotify.com/show/0SY5X4l0jeSJ8Z4tKG9cJ9?si=940cfc79393b477b" target="_blank" rel="noopener noreferrer"><svg style={{width: "50px", padding: "10px 10px 0"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg></a>
            <a href="https://podcasts.apple.com/us/podcast/success-money-and-marriage/id1607149407" target="_blank" rel="noopener noreferrer"><svg style={{width: "50px", padding: "10px 10px 0"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple Podcasts</title><path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z"/></svg></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hcHAua2FqYWJpLmNvbS9wb2RjYXN0cy8yMTQ3NDk1Njc4L2ZlZWQ" target="_blank" rel="noopener noreferrer"><svg style={{width: "50px", padding: "10px 10px 0"}} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Podcasts</title><path d="M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z"/></svg></a>
          </div>
          <AudioPlayer src={trackLink} onPlay={e => console.log("onPlay")}/>
          <div onClick={() => handleClick(1)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 1: Introduction</div>
          <div onClick={() => handleClick(2)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 2: Building a Relationship While Building a Business</div>
          <div onClick={() => handleClick(3)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 3: How to Fight Fair in Business</div>
          <div onClick={() => handleClick(4)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 4: Money</div>
          <div onClick={() => handleClick(5)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 5: Having Escape Time</div>
          <div onClick={() => handleClick(6)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 6: Who Makes the Final Decision?</div>
          <div onClick={() => handleClick(7)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 7: How to Fight Fair in Business</div>
          <div onClick={() => handleClick(8)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 8: Who's Working Harder?</div>
          <div onClick={() => handleClick(9)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 9: Patience and Forgiveness</div>
          <div onClick={() => handleClick(10)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 10: Negotiating Massive Success</div>
          <div onClick={() => handleClick(11)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 11: How Money Works</div>
          <div onClick={() => handleClick(12)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 12: The Time Value of Money</div>
          <div onClick={() => handleClick(13)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 13: Living an Unrestricted Existence</div>
          <div onClick={() => handleClick(14)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 14: The Rule of 72</div>
          <div onClick={() => handleClick(15)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 15: What to Teach Your Kids About Money</div>
          <div onClick={() => handleClick(16)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 16: Listening to Your Spouse/Partner</div>
          <div onClick={() => handleClick(17)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 17: Taking Time To Reconnect</div>
          <div onClick={() => handleClick(18)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 18: Building Each Other Up</div>
          <div onClick={() => handleClick(19)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 19: Exploring Shared Values</div>
          <div onClick={() => handleClick(20)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 20: Spending and Investing as a Couple</div>
          <div onClick={() => handleClick(21)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 21: 10 Things</div>
          <div onClick={() => handleClick(22)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 22: The More The Merrier</div>
          <div onClick={() => handleClick(23)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 23: Recognition</div>
          <div onClick={() => handleClick(24)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 24: Johnny Depp v. Amber Heard</div>
          <div onClick={() => handleClick(25)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 25: Roe v. Wade</div>
          <div onClick={() => handleClick(26)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 26: Assessing Your Strengths and Weaknesses</div>
          <div onClick={() => handleClick(27)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 27: Communication</div>
          <div onClick={() => handleClick(28)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 28: Building Credibility</div>
          <div onClick={() => handleClick(29)} style={{borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5", padding: "10px", color: "#868686", cursor: "pointer"}}>Episode 29: Should the Rules of Marriage be Rewritten?</div>
        </div>
      </Element>
      </div>
      <Element name="about" style={{backgroundColor: "rgba(35, 38, 50)", color: "white", paddingBottom: "10em"}}>
          <h1 class="section">SuccessMoneyMarriage</h1>
            <p style={{paddingBottom: "5em", width: "60%", marginLeft: "20%"}}>
              This weekly podcast explores key issues involving Success, Money, And Marriage in modern day America. 
              The shows objective is to explore multiple points of view on subjects that matter. After almost four 
              decades of marriage, business, and managing money, there are few obstacles this couple hasn’t encountered. 
              After a lifetime of mistakes, missteps and successes, the Siebold’s offer a unique perspective.
              {/* This weekly podcast explores key issues involving successMoneyMarriage in
              modern day America. The shows objective is to explore multiple points of view on
              subjects that matter. After almost four decades of living together, being married,
              traveling the world, and building businesses,
              there are few obstacles this couple hasn’t encountered. After a lifetime of mistakes,
              missteps and successes, the Siebold’s offer a unique perspective. */}
            </p>
          <h1 class="section">About Us</h1>
          <div style={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column"}}>
            <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <div>
                <img alt="dawn" style={{width: "53.5%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/hNazMd00SGuTTNUcuFdy_DawnSQblackwhite.jpg"/>
                <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Dawn Andrews</h2>
                  {/* Dawn is a former award-winning real estate professional specializing in high end properties based in Palm Beach, Florida. In 1999, she was tapped to become President of Siebold Success Network, a start-up founded by her husband Steve and his business partner.<br/><br/>Under Dawn’s leadership over the past 20 years, the company has grown into a multimillion-dollar enterprise that operates in 10 countries around the world. In 2009, she was invited into the National Speakers Association’s Million Dollar Speakers Group and currently serves as the President of the Georgia Speakers Bureau.  In September 2018, Dawn and Steve joined WealthWave® and, within a month, qualified to become Senior Marketing Directors. */}
              </div>
              <div>
                <img alt="steve" style={{width: "53%", borderRadius: "15px", borderWidth: "5px", borderColor: "white", borderStyle: "solid"}} src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/z2GWGgPaR2u8gnLkWRvS_Steve_Siebold_HS.jpeg"/>
                <h2 style={{fontFamily: "Oswald, sans-serif", fontWeight: "500", marginTop: "10px"}}>Steve Siebold</h2>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
              <p style={{width: "80%", textAlign: "left"}}>
                Steve and Dawn Siebold were married in Freeport, Bahamas on April 6, 1986. 
                As a married couple, they’ve succeeded, failed, fought, made up and reinvented 
                their relationship over and over again. <br/><br/>

                Together, they’ve built four multimillion companies from the ground up employing over 
                500 people with offices in 39 states and 10 countries around the world. More information 
                regarding the couple’s business ventures can be found at 
                <a style={{color: "gray"}} href="https://sieboldnetwork.com/"> www.SieboldNetwork.com</a><br/><br/>

                Steve is the author of 12 books, which have been panned by critics for their unapologetic approach 
                to sensitive subjects such as the war on drugs, self-made millionaires, assisted suicide, childless 
                marriage, legalized gambling, gun control, school prayer, catholic church sex scandal, labor unions, and others. <br/><br/>

                The premise of Siebold’s philosophy is that no matter what your ideology, our society should possess 
                the emotional maturity to engage in robust dialogue to elevate our collective consciousness and arrive 
                at a greater level of mutual understanding. During a time of unprecedented political polarization, 
                respectful discussion/dissention minus ad hominem attacks and demonization is the essence of this podcast. <br/><br/>

                Steve and Dawn are Certified Financial Educators and lead a team of financial educators and experts 
                with offices in 39 states throughout the U.S. and 4 provinces in Canada. Their organization helps 
                thousands of clients protect, invest and grow their wealth. Steve and Dawn deliver speeches and 
                seminars on the foundational elements of personal finance.  In 2020, Steve co-authored the #1 
                selling personal finance book of 2020, <u><i>How Money Works: Stop Being a Sucker</i></u>, with financial titan 
                Tom Mathews. The book has sold over 500,000 copies. <br/><br/>

                Steve has been interviewed on over 400 TV shows as a guest expert, including <i>The Today Show, 
                Good Morning America, CNN Headline News, Fox Business Network, MSNBC, and The Wall Street Journal 
                Special Report</i>. His opinion-editorials have been featured in USA Today, Yahoo Finance, U.S. News 
                and World Report, Chicago Sun-Times, San Francisco Chronicle, New York Times, Boston Globe and 
                dozens of others. He’s written 12 books that have been published in 7 languages and sold 1.6 million 
                copies. As a professional speaker, ranks among the top one percent of income earners worldwide. <br/><br/>

                The Siebold’s reside at Bona Allen Mansion, a 6-acre, 111-year-old private estate located in Buford, 
                Georgia, approximately 50 miles northeast of Atlanta. “The Mansion”, as it’s known locally, was the 
                private home of Bonaparte “Bona” Allen, the late 19th and early 20th century industrialist, who 
                founded and built the <i>Bona Allen Company</i>, which for decades was the largest manufacturer of leather goods in the world. <br/><br/>

                Steve and Dawn live with their two rescue dogs, Luna-Tuna and Big Lou. <br/>
              </p>
            </div>
          </div>
        </Element>
        <Element name="media" style={{backgroundColor: "white", color: "rgba(35, 38, 50)", paddingBottom: "10em", display: "flex", justifyContent: "center", height: "100%", width: "80%", marginLeft: "12%", marginTop: "5em", marginBottom: "0em", flexDirection: "column", alignContent: "flex-start"}}>
          <h1 class="section">Media</h1>
          <div style={{textAlign: "center", paddingTop: ".4em"}}>
            Steve Siebold is a regular guest on TV News shows across the country, including The
            Today Show, Good Morning America, CNN Headline News, Fox Business Network,
            MSNBC, and The Wall Street Journal Special Report.<br/><br/>
          </div>
          <Media />
        </Element>
        <Element name="photos" style={{backgroundColor: "white", color: "rgba(35, 38, 50)", paddingBottom: "10em", display: "flex", justifyContent: "center", height: "100%", width: "75%", marginLeft: "12%", marginTop: "3em", marginBottom: "0em", flexDirection: "column", alignContent: "flex-start"}}>
        <h1 class="section" style={{paddingBottom: "0em"}}>Photos</h1>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "50%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/8UG0oH5bSSAqGXA5ljrQ_magazine.jpg"/>
            <h3 class="captions">Steve and Dawn on the cover of LAKE Destination Lanier, Home Living in North Georgia</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 class="captions">Steve and Dawn with How Money Works co-author, Tom Mathews, on Leadership Live interviewing Bob Proctor</h3>
            <img style={{width: "50%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/cH3ZNlmRqmzGsVLa9If5_wealthwave.jpg"/>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/9oAbt199QECuqkAEhgV0_marriage.jpg"/>
            <h3 class="captions">A college photo of Steve and Dawn</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 class="captions">Steve and Dawn's wedding announcement from 1986</h3>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/qpIoWfonQ9GzrUbp4w8A_Screen_Shot_2021-04-08_at_6.28.53_PM.png"/>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/cCAFetmbTZedQ4TfJtUG_File_000.jpeg"/>
            <h3 class="captions">A wedding photo from Steve and Dawn's wedding</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 class="captions">A picture of Dawn outside of Bona Allen Mansion, the new homebase of Siebold Success Network</h3>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/CecHWLjTViZjXMgaHqOw_mansion.jpg"/>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/MEdZLO81Syas9g0feceX_Screen_Shot_2021-04-08_at_6.26.52_PM.png"/>
            <h3 class="captions">The Main house @ Bona Allen Mansion</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <h3 class="captions">Steve on camera on the tennis court @ Bona Allen Mansion</h3>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/7LIRInaR86G1abypJzj7_Screen_Shot_2021-04-08_at_6.28.04_PM.png"/>
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
            <img style={{width: "40%", padding: "2em 1em"}} alt="magazine" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/qngK3e73R72q7WwICDnC_File_001.jpeg"/>
            <h3 class="captions" style={{fontSize: "2.5vw"}}>Steve and Dawn's two rescue dogs, Luna-Tuna and Big Lou</h3>
          </div>
          
        </Element>
        {/* <Element name="media" style={{backgroundColor: "white", color: "rgba(35, 38, 50)", paddingBottom: "10em", display: "flex", justifyContent: "center", height: "100%", width: "80%", marginLeft: "12%", marginTop: "5em", marginBottom: "0em", flexDirection: "column", alignContent: "flex-start"}}>
          <h1 class="section">Success, Money, and Marriage Podcast</h1>
          <div style={{textAlign: "center", paddingTop: ".4em"}}>
            This weekly podcast explores key issues involving successMoneyMarriage in modern day America. 
            The shows objective is to explore multiple points of view on subjects that matter. After almost four 
            decades of marriage, business, and managing money, there are few obstacles this couple hasn’t encountered. 
            After a lifetime of mistakes, missteps and successes, the Siebold’s offer a unique perspective. <br/><br/>
          <button style={{width: "30%", height: "40px", fontSize: "1em"}}>Listen Now</button></div>
        </Element> */}
        <Element name="footer" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", backgroundColor: "rgba(35, 38, 50)", color: "white", padding: "3em", textAlign: "left"}}>
          <div>
          SuccessMoneyMarriage Podcast<br/>
            Bona Allen Mansion<br/>
            395 East Main St.<br/>
            Buford, Georgia 30518<br/>
            (Email) <a style={{color: "gray"}} href="mailto: contact@successmoneymarriage.com">contact@successmoneymarriage.com</a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://sieboldnetwork.com/">
            <img class="siebold" alt="siebold logo" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/3210473/settings_images/YnXXsy8RuabxB9QWXTCj_govesieboldlogo.png"/>
          </a>
        </Element>
    </div>
  );
}

export default App;
