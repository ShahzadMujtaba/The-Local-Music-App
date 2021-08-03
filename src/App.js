import React,{useState,useRef} from "react";
import Player from "./components/Player";
import Song from "./components/SongInfo";
import Library from "./components/Library";
import './styles/app.scss'
import songsList from './utils/data'


function App() {
  const [songs,setSongs] = useState(songsList())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)

  return (
    <div className="app">
      <Song isPlaying={isPlaying} currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying}  setIsPlaying={setIsPlaying} />
      <Library songs={songs} />
    </div>
  );
}

export default App;
