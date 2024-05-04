import React from 'react'
import searchIcn from "../search-white.svg"
import ListCard from './cards/ListCard'
import { useAlbumQuery } from '../redux/Services/spotifyAPI'
import { formatRelativeTime } from '../redux/Services/dateConverter'
import { formatMillisecToMin } from '../redux/Services/msToMin'
import TitleHeader from './TitleHeader'
import { useParams } from 'react-router'
import { Item } from '../redux/interfaces/Album.interface'
function Album() {
    const { albumid } = useParams<{ albumid: string }>();
    const {data:allData}=useAlbumQuery({albumID:`${albumid}`});
    

return (
    <div className='playlist-single-container'>
        <TitleHeader 
            profile={allData?.albums[0]?.images[1]?.url}
            type="Album"
            title={allData?.albums[0]?.name}
            message={allData?.albums[0]?.label}
        />
        <div className="music-section">
            <div className="music-titles-header">
                    <span className='number'><img className='srch-cn'  src={searchIcn} alt="srch"/></span>
                    <span className='song'>Song</span>
                    <span className='artist'>Artist</span>
                    <span className='date'>Date</span>
            </div>
            <div className='music-item'>
                {allData?.albums[0]?.tracks?.items.map((data:Item,i)=>
                <ListCard 
                    key={i} 
                    num={data?.track_number} 
                    // cover={data?.track?.album?.images.map((image) => image.url)[2]}
                    SongTitle={data?.name}
                    ArtistName={data?.artists?.map((artist:any) => artist.name).join()} 
                    album={allData?.albums[0]?.name} 
                    duration={formatMillisecToMin(data?.duration_ms)} 
                    date={formatRelativeTime(allData?.albums[0]?.release_date)} 
                /> 
                    )}
            </div>
        </div>
    </div>
    )
}

export default Album