import React, { useState } from 'react';
// type Props = {}
import playIcn from './play.svg'
import { Link } from 'react-router-dom';

interface ListCardProps{
    num:number;
    SongTitle:string;
    artist:string;
    date:string;
}
const ListCard:React.FC<ListCardProps>=( {num,
    SongTitle,
    artist,
    date}) => {
        const [isHovered, setIsHovered] = useState(false);
        const [showPlayIcon, setShowPlayIcon] = useState(true);
      
        const handleMouseEnter = () => {
          setIsHovered(true);
          setShowPlayIcon(false);
        };
      
        const handleMouseLeave = () => {
          setIsHovered(false);
          setShowPlayIcon(true);
        };
      
  return (
            <div className="music-titles"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            
            >
                <span
                    className="number"
                >
                    {!showPlayIcon ? (
                    <Link to="/">
                        <div className="pl-icn">
                            <img src={playIcn} alt="play-icn" />
                        </div>
                    </Link>
                    ) : (
                    ''
                    )}
                </span>
                    <span className='song'>{SongTitle}</span>
                    <span className='artist'>{artist}</span>
                    <span className='date'>{date}</span>
            </div>
  )
}

export default ListCard