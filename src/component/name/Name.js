import React from 'react';
import './Name.css';

const Name = (props) => {
  const { name, image } = props.singleCart;
  return (
    <div className='name'>
      <img src={image} alt="" />
      <h4>{name}</h4>
    </div>
  );
};

export default Name;