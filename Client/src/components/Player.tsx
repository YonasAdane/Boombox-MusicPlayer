import {useState} from 'react'
import MainComponent from './MainComponent'
import photo from "../profile-1.jpg"
import PlaylistSingle from './PlaylistSingle'
// import { UisHouseUser } from '@iconscout/react-unicons-solid'
import search from '../Userinterface_search-53.svg'
// import { Route, Routes } from 'react-router-dom'
import {  Routes, Route, Link } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SingleMusic from './SingleMusic'
const Player:React.FC=() =>{
    const playlist=[
        {src:"7rings-ArianaGrande.m4a"},
        {src:"badguy-BillieEilish.m4a"},
        {src:"Stop,Drop,Roll-CantStopWontStop.m4a"},
        {src:"TheWeekndSaveYourTears.mp3"},
    ];
    const [currentSong,setCurrentSong]=useState(0);
  return (
    <div className='player'>
        <div className='Sidebar'>
            <div className="user-acc">
                <img className='prof-img' src={photo} alt="profile-pic"/>
                <div className='user-name'>
                    <h2>Susan</h2>
                    <button>Premium</button>
                </div>
            </div>
            <div className='sub-box Search-bar'>
                <img className='search-icn' src={search} alt="search-icon"/>
                <input type="text"/>
            </div>
            <div className='sub-box menu'>
                <h2>MENU</h2>
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to="/playlist">Albums</Link>
                    </li>
                    <li>Artist</li>
                    <li>Categories</li>
                </ul>
            </div>
            <div className='sub-box library'>
                <h2>LIBRARY</h2>
                <ul>
                    <li>Record</li>
                    <li>Favourite</li>
                    <li>Local</li>
                </ul>
            </div>
            <div className='sub-box playlist'>
                <h2>PLAYLIST</h2>
                <ul>
                    <li>Create New</li>
                    <li>Rocks</li>
                </ul>
            </div>
            <div className='sub-box general'>
                <h2>GENERAL</h2>
                <ul>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
        <div className='main-comp'>
            {/* <MainComponent/> */}
            {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={<MainComponent />} />
                    <Route path="/playlist" element={<PlaylistSingle />} />
                    <Route path="/song/:id" element={<SingleMusic />} />
                </Routes>
                <AudioPlayer
                    autoPlay
                    showSkipControls={true}
                    onClickNext={()=>{if(currentSong!==playlist.length-1){setCurrentSong(currentSong+1)}else{setCurrentSong(0)}}}
                    onClickPrevious={()=>{if(currentSong!==0){setCurrentSong(currentSong-1)}else{setCurrentSong(playlist.length-1)}}}
                    // layout='horizontal-reverse'
                    src={`assets/audio/${playlist[currentSong].src}` }
                    onPlay={e => console.log("onPlay")}
                />
            {/* </BrowserRouter> */}
        </div>
    </div>
  )
}

export default Player