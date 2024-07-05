import React from 'react'
import Logo from '../../assets/logo.png';
import PaymentGateways from '../../assets/zpaymentgateways-3.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer>
    <div className='row'>
        <div className="column">
            <img src={Logo} alt="" />
            <p>We are a ready to wear brand <br />for fashion forward women <br /> around the world. <br />All pieces are made with ❤️ in Africa. <br />Straight out of Lagos, Nigeria.</p>
        </div>
        <div className="column">
            <h3>QUICK LINKS</h3>
            <p>Shipping & Return</p>
            <p>Support</p>
            <p>Phone: +2348060506980</p>
            <p className='email-id'>Email: info@zephansandco.com</p>
            <img src={PaymentGateways} alt="" />
        </div>
        <div className="column">
            <h3>HOT CATEGORIES</h3>
            <p>Pant Sets</p>
            <p>Jumpsuits</p>
            <p>Short Sets</p>
            <p>Dresses</p>
        </div>
        
    </div>
    </footer>
    </>
  )
}

export default Footer