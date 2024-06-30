import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './menu.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Basket from '../assets/basket.webp'

const Menu = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const mealProducts = data.filter(item => item.category !== 'wine');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className='menu_cont'>
      <Navbar />
      <div className="meal_menu">
      <h1>Menu</h1>
        {mealProducts.map((item, index) => (
          <div className='meal' key={index}>
            <img src={item.image} alt={item.name} className='meal_img' />
            <h2>{item.title}</h2>
            <h2>{item.price} AZN</h2>
            <button className='basket' onClick={() => addToCart(item)}> <img src={Basket} alt="" /> </button>
          </div>
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} total={calculateTotal()} />
      <Footer />
    </div>
  );
};

const Cart = ({ cart, removeFromCart, total }) => {
  return (
    <div className="cart">
      <h2>Səbət</h2>
      {cart.length === 0 ? (
        <p>Sizin səbətiniz boşdur.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className='cart-item_img' />
              <h3>{item.title}</h3>
              <h3>{item.price} AZN</h3>
              <button onClick={() => removeFromCart(index)}>Sil</button>
            </div>
          ))}
          <h2>Cəm: {total} AZN</h2>
        </>
      )}
    </div>
  );
};

export default Menu;