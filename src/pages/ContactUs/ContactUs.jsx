import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import './ContactUs.css'

export const ContactUs = () => {
    const onBuy = () => {
        alert('Gracias, vuelvan pronto!');
      };
  return (
    <>
    <Header/>
    <div className='ContactUs'>
<form class="form">
    <p class="title">Contact Us</p>
    <p class="message">Leave your information in the form.</p>
        <div class="flex">
        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button className="submit"onClick={onBuy}>Send</button>
</form>
    </div>
    </>
  )
}


