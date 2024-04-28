import React from 'react'
import playIcn from '../play.svg'
import plusIcn from '../plus.svg'
import profile from "../profile-1.jpg"


function SingleMusic(){
  
    return (
    <div className='playlist-single-container'>
        <div className="main-song-content">
            <div className='title-header song-header'>
                <img src={profile} alt="profile-pic" />
                <div>
                    <p>Song</p>
                    <h1>2002</h1>
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
        </div>
        <aside className='side-content'>

        </aside>
        
    </div>
  )
}

export default SingleMusic