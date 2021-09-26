import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Singer from '../singer/Singer';
import './Singers.css';

const Singers = () => {
  const [singers, setSingers] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(singers[0])
  useEffect(() => {
    fetch('./singer.json')
      .then(res => res.json())
      .then(data => setSingers(data))
  }, []);
  const handleAddToCart = (singer) => {
    const newCart = [...cart, singer];
    setCart(newCart)
  }
  return (
    <div className='singers'>
      <div className="singers-detail">
        {
          singers.map(singer => <Singer
            key={singer.num}
            singer={singer}
            handleAddToCart={handleAddToCart}
          ></Singer>)
        }
      </div>
      <div className="singer-list">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Singers;