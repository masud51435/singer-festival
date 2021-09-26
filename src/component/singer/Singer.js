import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Singer.css';
const Singer = (props) => {
  // console.log(props)
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

  const { name, country, age, image, salary, musictype } = props.singer
  return (
    <div className='singer'>
      <img src={image} alt="" />
      <h3>Name: {name}</h3>
      <h5>Musictype: {musictype}</h5>
      <h5>Country: {country}</h5>
      <h5>Age: {age}</h5>
      <h5>Salary: $ {salary}</h5>
      <button onClick={() => props.handleAddToCart(props.singer)}>{cartIcon} Add To Cart</button>
    </div>
  );
};

export default Singer;