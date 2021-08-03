import React from 'react'
import SongInfoLibrary from './SongInfoLibrary'

const Library = ({songs,setCurrentSong}) => {
    return (
        <div className="library">
            <h2>Local Music Library</h2>
            <div className="library-songs">
                {
                    songs.map(song=><SongInfoLibrary key={song.id} id={song.id} 
                                    songs={songs} setCurrentSong={setCurrentSong} 
                                    song={song} />)
                }
                
            </div>
        </div>
    )
}

export default Library
