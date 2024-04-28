import React from 'react'
// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {musicArray} from './MusicList'
import MediumCard from './cards/MediumCard'
import RoundedMedCard from './cards/RoundedMedCard'
import ListSmallCard from './cards/ListSmallCard'
// import saveYourTearsAudio  from "./TheWeeknd-SaveYourTears.mp3";
import Carousel from './Carousel';
interface musica{
  artist: string;
  songTitle:string;
  profilePicture:string;
  albumArt:string;
  audioSource:string;
  }
const MainComponent:React.FC=()=>{
  var k:musica[]=[]
  for(let i=5;i<musicArray.length;i++){
    k.push(musicArray[i])
  }
  return (
    <>
    <div className='albums'>
        <p>featured</p>
        <h2>New Release</h2>
        <Carousel>
        {k.map((music ,i)=>(
          <MediumCard 
              key={i} 
              coverArt={`/assets/${music.profilePicture}`} 
              title={music.songTitle} 
              subtitle={music.artist}
          />

        ))}
          
        </Carousel>
      </div>
      <div className='albums'>
        <p>featured</p>
        <h2>Albums</h2>
        <div className='card-container'>
        {musicArray.map((music ,i)=>(
          <MediumCard 
              key={i} 
              coverArt={`/assets/${music.profilePicture}`} 
              title={music.songTitle} 
              subtitle={music.artist}
          />

        ))}
        </div>
      </div>
      <div className='popular'>
          <h2>Top Artists</h2>
          <div className='card-container'>
          {musicArray.map((music ,i)=>(  
              <RoundedMedCard key={i} name={music.artist} img={`/assets/${music.profilePicture}`}/>
          ))}
          
          </div>
      </div>
      <div className='top-charts'>
          <h2>Top Charts</h2>
          <div className='list-card-container'>
          {musicArray.map((music ,i)=>(  
            <ListSmallCard key={i} index={++i} 
            img={`/assets/${music.profilePicture}`} 
              title={music.songTitle} 
            />
        ))}

          </div>
      </div>
      {/* <AudioPlayer
        autoPlay
        src={`assets/audio/7rings-ArianaGrande.m4a` }
        onPlay={e => console.log("onPlay")}
      /> */}
    </>
  )
}

export default MainComponent;



