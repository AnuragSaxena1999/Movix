import React  from 'react';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './style.css';
import { useRef } from 'react';
import { FaBars, FaPhone, FaTimes, FaWhatsapp } from 'react-icons/fa';
import image1 from '../../Assets/Images/movix-logo.svg'
const HeaderComponent = () => {
    // const navData = [
    //     {name:'Home', link:'/'},
    //     {name:'Movies', link:'/movie'},
    //     {name:'Tv Series', link:'/series'},
    //     {name:'Search', link:'/search'},
    //     {name:'Contact Us', link:'/contact'},
    //     {name: 'About Us', link: '/about'}
    // ]
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <Link to="/" class="logo" style={{ textDecoration: "none" }}>
            <img src={image1} alt="Logo" style={{ marginTop: "10px" }} />
               
                
               
            </Link>
            <nav ref={navRef} >
               
               <Link to="/" onClick={showNavBar} >Home</Link>
               <Link to="/movie" onClick={showNavBar}>Movies</Link>
               <Link to="/series" onClick={showNavBar}>Tv Series</Link>
               <Link to="/search" onClick={showNavBar}>Search</Link>
               
               
                



                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>

            </nav>
            <button className='nav-btn ' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
        
        
       
    )
};
    export default HeaderComponent;