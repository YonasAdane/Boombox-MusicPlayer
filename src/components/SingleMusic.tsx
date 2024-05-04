import React from 'react'
import playIcn from '../play.svg'
import plusIcn from '../plus.svg'
import profile from "../profile-1.jpg"
import TitleHeader from './TitleHeader'


function SingleMusic(){
  /**
   * profile?:string;
    type?:string;
    title?:string;
    message?:string;

   */
    return (
    <div className='playlist-single-container'>
        <TitleHeader profile={`public/assets/theWeeknd.jpg`} type="Single" title="Blinding Light" message="The Weekend" />
        
        
    </div>
  )
}

export default SingleMusic