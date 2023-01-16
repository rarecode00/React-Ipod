import React , {useContext, useEffect , useState} from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import '../css/Music.css'
import NoteContext from '../context/NoteContext'
import MusicItem from './MusicItem'
import LoadingSpinner from './LoadingSpinner'

const Music = (props) => {
    const [Play, setPlay] = useState([])
    const [songIndex , setSongIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const {click , forward , backward , setForward , setBackward , setClick , setEscape , escape} = useContext(NoteContext)

    let go = true;
  
    useEffect(() => {
      setLoading(true);
      const storageRef = firebase.storage().ref();
      var listRef = storageRef.child('Music/')
  
      listRef.listAll()
      .then(res => Promise.all(res.items.map(itemRef => itemRef.getMetadata().then((metadata) => { return {name: metadata.name , url: itemRef.getDownloadURL()}}))))
      .then(data => setPlay(data))
      .catch(err => console.log('error on fetching'))
      .finally(() => setLoading(false));
  }, [])
  
      useEffect(() => {
          if(forward){
              setSongIndex((songIndex + 1) % 5);
              setForward(false)                
          }else if(backward){
              setSongIndex(songIndex - 1 < 0 ? 4 :songIndex - 1);
              setBackward(false)
          }
      }, [forward , backward])
  
    return (
      <>
      {escape ? setEscape(false) : ""}
      { loading ? <LoadingSpinner /> : 
      <div>
      { click ? <MusicItem go = {go} songs = {Play[songIndex]}/> : 
      <div className='music'>                     
          {
              Play.map((element , index)=>{
                  return <div className='Music-item' style={{backgroundColor: index ===songIndex ? 'orangered' : ''}}>{element.name}</div>
              })
          }
          <div className = "Navigation neonText">Use " <i className="fa-solid fa-backward"></i> " and " <i className="fa-solid fa-forward"></i> " to Navigate.</div>
      </div>
      }
      </div>
      }
      </>
    )
  }
export default Music