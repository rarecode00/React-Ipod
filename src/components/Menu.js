import React , {useContext , useState} from 'react'
import '../css/App.css'
import NoteContext from '../context/NoteContext'
import Game from './Game.js'

const Menu = (props) => {
 const context = useContext(NoteContext)
 const {index , visible} = context
  const myStyle ={
      backgroundColor:'orangered'
  }
  return (
    <div className='container Screen Menu'>
    <ul className='List'>
       <li className='First'><div>REACT IPOD</div><div className='author'>By~ Krishna Sharma</div></li>
       <li style={index === 2 ? myStyle : {}}><div>Games</div></li>
       <li style={index === 3 ? myStyle : {}}><div>Music</div></li>
       <li style={index === 4 ? myStyle : {}}><div>Settings</div></li>
       <li style={index === 5 ? myStyle : {}} className='Last'><div>Coverflow</div></li>
    </ul>
 </div>
  )
}

export default Menu