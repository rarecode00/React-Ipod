import React, { useContext, useEffect, useState , useRef } from "react";
import NoteContext from "../context/NoteContext";
import "../css/Music.css";

const MusicItem = (props) => {
  const [url, setUrl] = useState("");
  const { escape, click, setClick, pause , setPause } = useContext(NoteContext);
  const audioRef = React.createRef();
  const [play , setPlay] = useState(false)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();   
    }
  }, []);

  useEffect(() => {
    async function fetchUrl() {
      const obj = await props.songs.url;
      console.log(obj);
      setUrl(obj);
    }
    fetchUrl();
  }, [props.songs.url]);

  useEffect(() => {
    if (audioRef.current) {
      if (pause) {
        if(!play) {
          audioRef.current.play();   
          setPlay(true)
        }else{
          audioRef.current.pause();
          setPlay(false);
        }
        setPause(false)
      }
    }
  }, [pause]);

  return (
    <div className="MusicItem">
      {escape ? setClick(false) : ""}
      <p className="Name">{props.songs.name}</p>
      <img
        src="https://previews.123rf.com/images/anviczo/anviczo1606/anviczo160600019/58551441-music-player-with-headphones-music-device-flat-icon-vector-illustration-on-white-background-mp3-play.jpg"
        width={150}
        height={150}
        className="image-player"
        alt="Image"
      />
      <audio ref={audioRef} controls="seeking" src={url} className="audioPlay" autoPlay = {true}></audio>
    </div>
  );
};

export default MusicItem;
