import React from 'react'
interface RoundedMedCardProps{
  name:string;
  img:string;
}
const RoundedMedCard:React.FC<RoundedMedCardProps>=({name,img})=> {
  return (
    <div className='rounded-medium-card'>
        <img src={img} alt='cover-art'/>
        <div className='title-container'>
            <h3>{name}</h3>
        </div>
    </div>
  )
}

export default RoundedMedCard