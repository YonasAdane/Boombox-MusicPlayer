import React from 'react'
import playIcn from '../play.svg'
import plusIcn from '../plus.svg'
import profile from "../profile-1.jpg"
import searchIcn from "../search-white.svg"
import ListCard from './cards/ListCard'
import {musicArray} from './MusicList'
import { useExploreQuery } from '../redux/Services/spotifyAPI'
import { ExploreInterface } from '../redux/interfaces/Explore.interface'
function PlaylistSingle() {
    interface ResponseType {
        data: ExploreInterface | any;
        isLoading: boolean;
        error: any;
        }
        const response: ResponseType = {
            data: null,
            isLoading: false,
            error: null,
        };
        const { data } =  useExploreQuery("1");
        response.data = data;
        console.log("response data",response?.data)
  return (
    <div className='playlist-single-container'>
        <div className='playlist-header'>
            <img src={profile} alt="profile-pic" />
            <div>
                <p>Playlist</p>
                <h1>Today's Top Hits</h1>
                <p>The best 50 from the world music. Always fresh and always brand new.
                    created by <b>Spotify</b> --14 songs ==94 mins
                </p>
                <div className='icons'>
                    <div className="play-icn"><img src={playIcn} alt="play-icn" /></div>
                    <div className='plus-icn'><img src={plusIcn} alt="plus-icn" /></div>
                    <div className='ellipsis-icn'><div className="circle">&#8230;</div></div>
                </div>
            </div>
        </div>
        <div className="music-section">
            <div className="music-titles-header">
                    <span className='number'><img className='srch-cn'  src={searchIcn} alt="srch"/></span>
                    <span className='song'>Song</span>
                    <span className='artist'>Artist</span>
                    <span className='date'>Date</span>
            </div>
            <div className='music-item'>
                {musicArray.map((item,i)=>
                <ListCard key={i} num={++i} SongTitle={item.songTitle} artist={item.artist} date='2 days ago'/> 
                    )}
            </div>
        </div>
    </div>
  )
}

export default PlaylistSingle