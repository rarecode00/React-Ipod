import React , {useState} from 'react'
import NoteContext from './NoteContext'
import '../css/App.css'

const NoteState = (props) => {
    let [visible, setVisible] = useState(false)
    let [index , setIndex] = useState(2)
    let [count , setCount] = useState(0)
    let [click , setClick] = useState(false)
  
    const handleIndex = () =>{
        if(!visible) return;
        setCount(count + 1)
        if(count > 3){
          setCount(0);
          if(index + 1 > 5) setIndex(2)
          else setIndex(index + 1)
        }
    } 
  
    const handleVisible = ()=>{
        visible = !visible
        setVisible(visible)
    }
  
    return (
        <NoteContext.Provider value={{visible , index , click , count , setIndex , setVisible , setCount}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState