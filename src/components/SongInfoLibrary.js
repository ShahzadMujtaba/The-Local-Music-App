import React from 'react'

const SongInfoLibrary=({song,isPlaying}) =>{
    
    return (
        <div className="library-song">
            <img alt={song.name} className={isPlaying?"rotateSong":''} src={song.cover} />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    )
}

export default SongInfoLibrary