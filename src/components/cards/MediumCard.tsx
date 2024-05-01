import React from 'react'
interface MediumCardProps{
    coverArt : string;
    title : string;
    subtitle : string
  }
const MediumCard: React.FC<MediumCardProps>=({coverArt,title,subtitle})=>{
    // <MediumCard img={} title={} subtitle={}/>
// 
  return (
    <div className='medium-card'>
        <img src={coverArt} alt='cover-art'/>
        <div className='title-container'>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default MediumCard