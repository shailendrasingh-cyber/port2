import React from 'react';
import './contact.css';
import Walmart from '../../Assets/walmart.png';
import Microsoft from '../../Assets/microsoft.png';
import Adobe from '../../Assets/adobe.png';
import Facebook from '../../Assets/facebook.png';
import FacebookIcon from '../../Assets/facebook-icon.png';
import TwitterIcon from '../../Assets/twitter.png';
import YouTubeIcon from '../../Assets/youtube.png';
import InstagramIcon from '../../Assets/instagram.png';

const Contact = () => {
  return (
    <section id='contactPage'>
        <div id='clients'>
          <h1 className='contactPageTitle'>My Clients</h1>
          <p className='clientDesc'>
            I have had the opportunity to work with a diverse group of companies.
            Some of the notable companies I have worked with includes
          </p>
          <div className='clientImgs'>
            <img src={Walmart} alt='Walmart' className='clientImg'/>
            <img src={Microsoft} alt='Microsoft' className='clientImg'/>
            <img src={Adobe} alt='Adobe' className='clientImg'/>
            <img src={Facebook} alt='Facebook' className='clientImg'/>
          </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm'>
            <input type='text' className='name' placeholder='Your Name'/>
            <input type='email' className='email' placeholder='Your email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message...'></textarea>
            <button type='submit' value='send' className='submitBtn' >Submit</button>
            <div className='links'>
              <img src={FacebookIcon} alt='FacebookIcon' className='link' />
              <img src={TwitterIcon} alt='TwitterIcon' className='link' />
              <img src={YouTubeIcon} alt='YouTubeIcon' className='link' />
              <img src={InstagramIcon} alt='InstagramIcon' className='link' />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;