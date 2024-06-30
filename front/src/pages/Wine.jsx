import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './menu.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wine = () => {

  const [data, setData] = useState([]);

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

  console.log(data)

  const wineProducts = data.filter(item => item.category === 'wine');


  return (
    <div className='menu_cont'>
      <Navbar />
      <h1>Şərablar</h1>
      <div className="menuu">
      {wineProducts.map((item, index) => (
          <div className='meal' key={index}>
            <img src={item.image} alt={item.name} className='meal_img' />
            <h2>{item.title}</h2>
            <h2>{item.price} AZN</h2>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
  )
}

export default Wine