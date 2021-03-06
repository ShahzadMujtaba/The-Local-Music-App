import React from 'react'

const Song=({currentSong,isPlaying}) =>{
    
    return (
        <div className="songs-container">
            <img alt={currentSong.name} className={isPlaying?"rotateSong":''} src={currentSong.cover} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song
