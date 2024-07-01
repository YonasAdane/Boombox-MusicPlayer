import React from 'react'
import playIcn from '../play.svg'
import plusIcn from '../plus.svg'
import profile from "../profile-1.jpg"
import searchIcn from "../search-white.svg"
import ListCard from './cards/ListCard'
import {musicArray} from './MusicList'
import { usePlaylistTracksQuery } from '../redux/Services/spotifyAPI'
import { PlaylistTracksItem } from '../redux/interfaces/PlaylistTracks.interface'
import { formatRelativeTime } from '../redux/Services/dateConverter'
import { formatMillisecToMin } from '../redux/Services/msToMin'
import TitleHeader from './TitleHeader'
import { useParams } from 'react-router'
function Playlist() {
    const { playlistid } = useParams<{ playlistid: string }>();
    const {data:allData}=usePlaylistTracksQuery({playlistID:`${playlistid}`});

return (
    <div className='playlist-single-container'>
        <TitleHeader 
            profile={profile}
            type="Playlist"
            title="Today's Top Hits"
            message="The best 50 from the world music. Always fresh and always brand new.
            created by <b>Spotify</b> --14 songs ==94 mins"
        />
        <div className="music-section">
            <div className="music-titles-header">
                    <span className='number'><img className='srch-cn'  src={searchIcn} alt="srch"/></span>
                    <span className='song'>Song</span>
                    <span className='artist'>Artist</span>
                    <span className='date'>Date</span>
            </div>
            <div className='music-item'>
                {allData?.items.map((data:PlaylistTracksItem,i)=>
                <ListCard 
                    key={i} 
                    num={++i} 
                    cover={data?.track?.album?.images.map((image) => image.url)[2]}
                    SongTitle={data?.track?.name}
                    ArtistName={data?.track?.artists.map((artist:any) => artist.name).join()} 
                    album={data?.track?.album?.name} 
                    duration={formatMillisecToMin(data?.track?.duration_ms)} 
                    date={formatRelativeTime(data?.track?.album?.release_date)} 
                /> 
                    )}
            </div>
        </div>
    </div>
  )
}

export default Playlist