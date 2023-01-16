import React, { useContext, useState, useEffect } from "react";
import Screen from "./Screen";
import NoteContext from "../context/NoteContext";
import '../css/App.css'
import Menu from './Menu'
import Game from "./Game";
import Setting from "./Setting";
import Coverflow from "./Coverflow";
import Music from "./Music";
import {listAll} from "./Firebase"

const Main = () => {
  const context = useContext(NoteContext);
  let {visible, setVisible , count , setCount , setIndex , index , backward , setBackward , forward , setForward , setClick , click, setEscape , setPause} = useContext(NoteContext);
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
      if(!visible){
         if(view === 3){
            setClick(true);
         }
         return;
      }
      setClicked(!clicked)
      setView(index)
      setVisible(!visible)
      setClick(false)
  }

  const handle = () =>{
     if(view === 3 && click){
      setEscape(true)
      return;
     }
     setVisible(!visible)
  }

  const handleClickBackward = () =>{
     if(view === 3){
        setBackward(true)
     }
  }

  const handleClickForward = () =>{
     if(view === 3){
        setForward(true)
     }
  }

  const handlePause = () =>{
     if(view === 3 && click){
        setPause(true);
        return;
     }
  }

  return (
    <div className="App d-flex justify-content-center my-4 fixed-height">
      <div className="box d-flex justify-content-center">
        <div>
          <div className="screen my-3">
            {visible ? <Menu/> : ""}
            {view === 2 ? <Game/>: ""}
            {view === 3 ? <Music/>: ""}
            {view === 4 ? <Setting/> : ""}
            {view === 5 ? <Coverflow/> : ""}
          </div>
          <div className={`circular ${view === 3 & click ? 'neon-text' : ''}`} onMouseOver={handleIndex}>
            <i className="fa-solid fa-bars menu" onClick = {handle}></i>
            <div className="inner-circular"  onClick = {handleClick}>
              <div className="notS">Select</div>
            </div>
            <i className="fa-solid fa-backward backward" onClick={handleClickBackward}></i>
            <i className="fa-solid fa-forward fr" onClick={handleClickForward}></i>
            <i className="fa-solid fa-circle-play pause" onClick={handlePause}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
