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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rerum modi nisi aperiam. Itaque, earum molestias, quisquam esse, unde repellat reprehenderit vitae quo iste repellendus impedit perferendis. Minus officiis perferendis nulla ut laudantium ipsam eius architecto necessitatibus eveniet itaque libero asperiores corrupti dolorem ullam ratione, commodi labore mollitia? Sequi magni dignissimos, ab nobis dolore tempore recusandae, eius error repellendus voluptatibus ullam iusto atque voluptatem? Dolor ipsum unde quis ullam corrupti expedita, voluptas quibusdam at minima? Voluptates commodi pariatur blanditiis reprehenderit, maiores ab. Consequatur labore, error hic non nostrum a, temporibus inventore asperiores iure quasi, fuga sequi amet voluptas aperiam numquam.
        </aside>
        
    </div>
  )
}

export default SingleMusic