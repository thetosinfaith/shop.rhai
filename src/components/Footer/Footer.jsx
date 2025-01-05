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
            <p>We are a ready to wear brand for fashion forward women around the world. All pieces are made with ❤️ in Aba. Straight out of Aba, Nigeria.</p>
        </div>
        <div className="column">
            <h3>HOT CATEGORIES</h3>
            <p>OOTD Central Sets</p>
            <p>Jumpsuits Sets</p>
            <p>Wardrobe Unlimited Sets</p>
            <p>Dresses</p>
        </div>
        <div className="column">
            <h3>CONTACT INFO</h3>
            <p>Phone: +2348060506980</p>
            <p>Store open: 9:00AM – 6:00PM</p>
            <p> Address: Plot 56, Adebisi Popoola Crescent, Lekki Phase 1.</p>
        </div>
        <div className="column">
            <h3>QUICK LINKS</h3>
            <p>Shipping & Return</p>
            <p>Support</p>
            <p>Phone: +2348060506980</p>
            <p className='email-id'>Email: info@zephansandco.com</p>
            <img src={PaymentGateways} alt="" />
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer