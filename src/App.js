import './css/App.css';
import NoteState from './context/NoteState'
import Main from './components/Main'

function App() {
  return (
    <NoteState>
      <Main/>
    </NoteState>
  );
}

export default App;
