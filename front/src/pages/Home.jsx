import React from 'react';
import './home.css';
import Image1 from '../assets/i1.png';
import Image2 from '../assets/i2.png';
import Image3 from '../assets/i3.png';
import Image4 from '../assets/i4.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image6 from '../assets/i6.png'
import Image5 from '../assets/i5.png'
import Image7 from '../assets/i7.png'
import Image8 from '../assets/i8.png'
import Image9 from '../assets/i9.png'
import Group1 from '../assets/Group 1.svg'
import { Link } from 'react-router-dom';
import Group2 from '../assets/Group 2.png'





const Home = () => {
  return (
    <div className="background">
        <Navbar />
      <div className="main">
        <img src={Image2} alt="" className="image" />
        <img src={Image1} alt="" className="image_center" />
        <img src={Image3} alt="" className="image_right" />
      </div>
      <div className="text">
        <h1>IZGARA<br /> BİFTEK</h1>
        <p>Antrikot dana biftek</p>
        <button>Yer rezerve edin</button>
      </div>
      <div className="bodyy">
        <img src={Image4} alt="" className='img4'/>
        <div className="cont">
            <h1 className='home_h1'>The American Steakhouse-a xoş gəlmisiniz</h1>
            <div className="box1">
            <p className='lorem1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat purus magna, et suscipit quam commodo nec. Sed sit amet sapien eu dui.</p>
            <div className="line_text">
            <div className="line"></div>
            <span>Göyərti sousu ilə qızardılmış mal əti biftek</span>
            </div>
            </div>
            <div className="box2">
                <img src={Image5} alt="" />
                <div className="t1">
                <h1>Menyunu kəşf edin</h1>
                <h4>BİFTEK</h4>
                <p className='lorem2'>Vestibulum id pretium erat. Mauris pretium sem nibh.</p>
                <Link to="/menu"><button>Explore</button></Link>
                </div>
            </div>
            <div className="box3">
            <img src={Image7} alt="" />
                <div className="line_text1">
                    <img src={Group1} alt="" />
                    <h4>ŞƏRAB</h4>
                    <div className="line1"></div>
                    <p>Vestibulum id pretium erat. Mauris pretium sem nibh.</p>
                   <button><Link to='/wine'>Explore</Link></button>
                </div>
            </div>
            <div className="image2">
                <img src={Group2} alt="" />
            </div>
            <div className="idea">
                <img src={Image8} alt="" />
            </div>
            <div className="box4">
                <img src={Image9} alt="" />
            </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Home;
