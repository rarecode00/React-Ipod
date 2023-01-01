import './css/App.css';
import React , {useState} from 'react'
import Screen from './components/Screen';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App d-flex justify-content-center my-4">
        <div className='box d-flex justify-content-center'>
           <div>
           <div className='screen my-3'>
            {visible ? <Screen/> : ""}
           </div>
           <div className='circular'>
            <i className="fa-solid fa-bars menu"></i>             
            <div className="inner-circular"><div>Select</div></div>
            <i className="fa-solid fa-backward backward"></i>
            <i className="fa-solid fa-forward fr"></i>
            <i className="fa-solid fa-circle-play pause"></i>           
            </div>
           </div>
        </div>
    </div>
  );
}

export default App;
