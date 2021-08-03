import React from 'react'

const SongInfoLibrary=({song,isPlaying,setCurrentSong,songs,id}) =>{

    const songsSelectHandler = ()=>{
      const selectedSong = songs.filter((song)=>song.id===id)
      setCurrentSong(selectedSong[0])
      console.log(selectedSong)
    }
    return (
        <div className="library-song" onClick={songsSelectHandler}>
            <img alt={song.name} className={isPlaying?"rotateSong":''} src={song.cover} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default SongInfoLibrary