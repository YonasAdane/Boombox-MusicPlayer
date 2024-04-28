import React from 'react';

interface ListSmallCardProps {
  img: string;
  index: number;
  title: string;
}

const ListSmallCard: React.FC<ListSmallCardProps> = ({ img, index, title }) => {
  return (
    <div className="list-style-card">
      <img src={img} alt="cover-art"/>
      <div>
        <p>{index}</p>
        <h3>{title}</h3>
      </div>
      <p>&#8230;</p>
    </div>
  );
};

export default ListSmallCard;