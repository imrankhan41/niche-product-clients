import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        
        <div className="p-4 mt-5 text-white row text-Dark bg-danger">
            <hr className="bg-danger " style={{height: "10px"}} / >
        <div className="border-end text-start col-lg-3 col-md-4 col-sm-6 col-12">
          <h6> Quick Help</h6>
          <br />
          <h6> Do you have questions?</h6>
          <Link className="footer-link"to="/home">1300 471 320</Link> <br />
          <Link className="footer-link"to="/home">	Email Contact Form</Link> 
        </div>
        <div className="border-end text-start col-lg-3 col-md-4 col-sm-6 col-12">
          <h6> Customer Service</h6>
          <br />
          <Link className="footer-link"to="/home">Log in</Link> <br />
          <Link className="footer-link"to="/home">Private Buy & Sell</Link> <br />
          <Link className="footer-link"to="/home">Click & Collect</Link> <br />
          <Link className="footer-link"to="/home">Exchange & Returns</Link><br /> 
          <Link className="footer-link"to="/home">Delivery & Shipping</Link> <br />
          <Link className="footer-link"to="/home">Subscribe</Link> <br />
          <Link className="footer-link"to="/home">Buy E-Gift Cards</Link> 
        </div>
        <div className="border-end text-start col-lg-3 col-md-4 col-sm-6 col-12">
          <h6> About BikeExchange</h6>
          <br />
          <Link className="footer-link"to="/home">About Us</Link> <br />
          <Link className="footer-link"to="/home">Investor Relations</Link> <br />
          <Link className="footer-link"to="/home">Our Marketplace Concept</Link> <br />
          <Link className="footer-link"to="/home">Jobs & Careers</Link><br /> 
          <Link className="footer-link"to="/home">Privacy & Security</Link> <br />
          <Link className="footer-link"to="/home">Terms & Conditions</Link> <br />
        </div>
        <div className="border-end text-start col-lg-3 col-md-4 col-sm-6 col-12">
          <h6> Solutions for Retailers & Dealers</h6>
          <br />
          <Link className="footer-link"to="/home"><span className="text-danger">Retailstore:</span> How We Support Our Trade</Link> <br />
          <Link className="footer-link"to="/home"><span className="text-danger">Webstore:</span> Your Own Online Shop</Link> <br />
          <Link className="footer-link"to="/home"><span className="text-danger">Connect: </span> Products Easy Online</Link> <br />
          <Link className="footer-link"to="/home">What Our Business Customers Say</Link>
        </div>
        {/* <div className="mt-5 col-lg-3 col-md-4 col-sm-6 col-12">
            <h4 className="text-start">Paymnet :</h4>
            <img className="img-fluid" src="https://i.ibb.co/jVBp03x/paycover-2.png" alt="" srcset="" />
            
        </div> */}
        <hr className="mt-5"/>
        <div className="col-lg-12">
        <h5>Copyright © 2021 Food-delivery website </h5>
        </div>
       
    </div>
    );
};

export default Footer;