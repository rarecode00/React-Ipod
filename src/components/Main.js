import React, { useContext, useState, useEffect } from "react";
import Screen from "./Screen";
import NoteContext from "../context/NoteContext";
import '../css/App.css'
import Menu from './Menu'
import Game from "./Game";
import Setting from "./Setting";
import Coverflow from "./Coverflow";

const Main = () => {
  const context = useContext(NoteContext);
  let { visible, setVisible , count , setCount , setIndex , index } = context;
  const [clicked , setClicked] = useState(false)
  const [view , setView] = useState(-1)
  const handleIndex = () => {
    
    setCount(count + 1);
    if (count > 3) {
      setCount(0);
      if (index + 1 > 5) setIndex(2);
      else setIndex(index + 1);
    }
  };

  const handleClick = () =>{
      if(!visible) return;
      setClicked(!clicked)
      setView(index)
       setVisible(!visible)
  }

  const handle = () =>{
     setVisible(!visible)
  }

  return (
    <div className="App d-flex justify-content-center my-4 fixed-height">
      <div className="box d-flex justify-content-center">
        <div>
          <div className="screen my-3">
            {visible ? <Menu/> : ""}
            {view === 2 ? <Game/>: ""}
            {view === 4 ? <Setting/> : ""}
            {view === 5 ? <Coverflow/> : ""}
          </div>
          <div className="circular" onMouseOver={handleIndex}>
            <i className="fa-solid fa-bars menu" onClick = {handle}></i>
            <div className="inner-circular">
              <div className="notS" onClick = {handleClick}>Select</div>
            </div>
            <i className="fa-solid fa-backward backward"></i>
            <i className="fa-solid fa-forward fr"></i>
            <i className="fa-solid fa-circle-play pause"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
