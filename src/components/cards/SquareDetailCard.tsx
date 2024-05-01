import React from 'react'

interface SquareDetailCardInterface{
    cover?:string;
    title?:string;
    subtitle?:string;
}

const SquareDetailCard:React.FC<SquareDetailCardInterface> = ({cover,title,subtitle}) => {
  return (
    <div className="medium-card">
        <img src={cover} alt="cover-art" />
        <div className="title-container detail-square">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
  )
}
export default SquareDetailCard