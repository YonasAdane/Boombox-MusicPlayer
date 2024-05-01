import React from 'react'
import playIcn from '../play.svg'
import plusIcn from '../plus.svg'
interface TitleHeaderInterface{
    profile?:string;
    type?:string;
    title?:string;
    message?:string;

}
const TitleHeader:React.FC<TitleHeaderInterface>=({profile,type,title,message})=> {
  return (
    <div className='playlist-header'>
        <img src={profile} alt="" />
        <div>
            <p>{type}</p>
            <h1>{title}</h1>
            <p>{message}
            </p>
            <div className='icons'>
                <div className="play-icn"><img src={playIcn} alt="play-icn" /></div>
                <div className='plus-icn'><img src={plusIcn} alt="plus-icn" /></div>
                <div className='ellipsis-icn'><div className="circle">&#8230;</div></div>
            </div>
        </div>
    </div>
  )
}

export default TitleHeader