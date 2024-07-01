import React from 'react';

interface ListCardProps{
    num:number;
    SongTitle:string;
    album:string;
    date:string;
    cover?:string;
    duration:string;
    ArtistName:string;
}
const ListCard:React.FC<ListCardProps>=( {
    num,
    SongTitle,
    album,
    date,
    cover,
    duration,
    ArtistName
}) => {

return (
    // ${music.profilePicture}`
        <div className="music-titles">
            <span className='number'>{num}</span>
            {cover&&
            <span className='cover'><img src={cover} alt="cover"/></span>
            }
            <span className='song'>
                <div className="mz">
                    <h3>{SongTitle}</h3>
                    <p>{ArtistName}</p> 
                </div>
            </span>
            <span className='artist'><p>{album}</p></span>
            <span className='duration'><p>{duration}</p></span>
            <span className='date'><p>{date}</p></span>
        </div>
)
}

export default ListCard