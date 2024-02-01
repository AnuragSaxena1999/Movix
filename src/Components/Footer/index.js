import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube, BsInstagram, } from "react-icons/bs";

const FooterComponent = () => {
  return (
    <>
      <footer className="text-light" style={{ backgroundColor: "black" }} data-aos="fade-up" data-aos-duration="1000">
        <div className="container py-5 " >
          <div className="row ">
            <div className="col-md-5 ">
              <h4 style={{ color: "#ff5860", fontFamily: "Times New Roman" }}>MovieHub</h4>
              <hr />

              <p style={{ fontSize: "15px" }}>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore maiores aut neque illum reprehenderit vel maxime obcaecati, animi, quae autem sapiente tenetur eligendi eos cupiditate. Officia, dolores necessitatibus! Assumenda, laudantium. "</p>

            </div>
            <div className="col-md-3 ">
              <h4 style={{ color: "#ff5860", fontFamily: "Times New Roman" }}>Useful Links</h4>
              <hr />
              <ul className="list-unstyled">
                <li ><Link to="/movie" style={{ color: "white" }}>Anurag</Link></li>
                <li><Link to="/series" style={{ color: "white" }}>Tv Series</Link></li>
                <li><Link to="/search" style={{ color: "white" }}>Seacrh</Link></li>

              </ul>
            </div>

            {/* <div className="col-md-2">
            <h4 style={{color:"#fff", fontFamily: "Times New Roman"}}>Contact Us</h4>
            <hr />

            <ul className="list-unstyled">
              <li><a href="tel:870-069-1364" target="_blank" style={{color:"black"}}>870-069-1364</a></li>
              <li><a href="mailto:info@abc.in" target="_blank" style={{color:"black"}}>info@abc.in</a></li>
              
            </ul>
          </div> */}
            <div className="col-md-3 ">
              <h4 style={{ color: "#ff5860", fontFamily: "Times New Roman", marginTop: "10px" }}>Get Connected Us</h4>
              <hr />
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://github.com/AnuragSaxena1999" target="_blank" style={{ color: "white", fontSize: "30px" }}>
                    <BsGithub />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="/" target="_blank" style={{ color: "white", fontSize: "30px" }}>
                    <BsInstagram />
                  </a>
                </li>


                <li className="list-inline-item ">
                  <a href="/" target="_blank" style={{ color: "white", fontSize: "30px" }}>
                    <BsLinkedin />
                  </a>
                </li>

                <li className="list-inline-item ">
                  <a href="/" target="_blank" style={{ color: "white", fontSize: "30px" }}>
                    <FaYoutube />
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col-md-12 text-center">
              <p className="text-muted" style={{ fontSize: "15px" }}>Designed and Developed by Anurag Saxena</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
export default FooterComponent;
