import React from 'react'
import { Link } from 'react-router-dom';

interface SquareDetailCardInterface{
    cover?:string;
    title?:string;
    subtitle?:string;
    link?:string;
}

const SquareDetailCard:React.FC<SquareDetailCardInterface> = ({cover,title,subtitle, link}) => {
  return (
    <div className="medium-card">
      <Link to={link?link:""}>
        <img src={cover} alt="cover-art" />
        <div className="title-container detail-square">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}
export default SquareDetailCard