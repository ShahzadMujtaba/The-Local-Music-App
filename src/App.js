import React,{useState,useRef} from "react";
import Player from "./components/Player";
import Song from "./components/SongInfo";
import Library from "./components/Library";
import './styles/app.scss'
import songsList from './utils/data'
import Navbar from "./components/Navbar";


function App() {
  const [songs,setSongs] = useState(songsList())
  const [currentSong,setCurrentSong] = useState(songs[0])
  const [isPlaying,setIsPlaying] = useState(false)
  const [libraryStatus,setLibraryStatus] = useState(false)
  return (
    <div className="app">
      <Navbar libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song isPlaying={isPlaying} currentSong={currentSong}/>
      <Player currentSong={currentSong} isPlaying={isPlaying}  setIsPlaying={setIsPlaying} />
      <Library songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} libraryStatus={libraryStatus} />
    </div>
  );
}

export default App;
