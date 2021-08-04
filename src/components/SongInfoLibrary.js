import React from 'react'

const SongInfoLibrary=({song,isPlaying,setCurrentSong,songs,id,setSongs}) =>{
 let active 
    const songsSelectHandler = ()=>{
      const selectedSong = songs.filter((song)=>song.id===id)
      setCurrentSong(selectedSong[0])
      const songActiveUpdate =  songs.map((song)=>{
            if(song.id===id){
                return{
                    ...song,
                    active:true
                }
            }else{
                return {
                    ...song,
                    active:false
                }
            }
        })
        setSongs(songActiveUpdate)
      console.log(songActiveUpdate)
    }
    return (
        <div className={`library-song  ${song.active?'selected':""}`} onClick={songsSelectHandler}>
            <img alt={song.name} className={isPlaying?"rotateSong":''} src={song.cover} />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
            
        </div>
    )
}

export default SongInfoLibrary