import React ,{useState,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay,faPause,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Player=({currentSong,isPlaying,setIsPlaying})=> {
 // Ref for accessing current audio
    const audioRef = useRef(null)
 //  Event Handlers
 const playSongHandler =()=>{
     if(isPlaying){
         audioRef.current.pause()
         setIsPlaying(!isPlaying)
     }else{
         audioRef.current.play()
         setIsPlaying(!isPlaying)
     }
 }

//  update song time on the play
 const timeUpdaleHandler = (e) =>{
     const current = e.target.currentTime
     const duration = e.target.duration
     setSongInfo({...songInfo,currentTime:current,duration:duration})
     if(e.target.currentTime===e.target.duration){
        setIsPlaying(false)
     }
    
 }

 const getTime = (time) =>{
    //  console.log(typeof(Math.floor(time/60)+ ":" +("0"+Math.floor(time%60)).slice(-2)))
   return Math.floor(Number(time/60))+ ":" +("0"+Math.floor(time%60)).slice(-2)
 }

 const slideHandler = (e)=>{
     audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo,currentTime:e.target.value})
   
 }
//State
const [songInfo,setSongInfo] =  useState({currentTime:0,duration:0})

    return (
        <div className="player">
            <audio src="" />
            <div className="time-controller">
                 <p>{getTime(songInfo.currentTime)}</p>
                 <input
                   onChange={slideHandler} 
                   min={0}
                   max={songInfo.duration||0} 
                   value={songInfo.currentTime} 
                   type="range"/>
                 <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control" >
               <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleLeft} />   
               <FontAwesomeIcon className="play" size="2x" icon={isPlaying?faPause:faPlay} onClick={playSongHandler} />
               <FontAwesomeIcon   className="skip-back"size="2x" icon={faAngleRight}  />
            </div>
            <audio onTimeUpdate={timeUpdaleHandler} onLoadedMetadata={timeUpdaleHandler} ref={audioRef} src={currentSong.audio}/>
             <audio />
        </div>
    )
}

export default Player
