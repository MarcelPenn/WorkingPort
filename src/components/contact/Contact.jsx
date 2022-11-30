import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <div className="contactWrapper">
    <div className="contact" id="contact">
      <div className="left">
      <div class="left-item"><i class="fa-solid fa-location-dot"></i>Montreal, QC, Canada</div>
            <div class="left-item"><i class="fa-solid fa-envelope"></i>hire.marcel@gmail.com</div>
            <div class="left-item"><i class="fa-solid fa-clock"></i>Mon - Fri 8:00 AM to 6:00 PM</div>
      </div>
      <div className="right">
        <div className="wrapper">
        {/*
        <div className="imgContainer">
           <img src="assets/side-1.jpg" alt="man"></img> 
         </div>
  */}
        <h2>Contact</h2>
            <form class="contactForm" action="" method="post">
                <input type="text" name="name" class="text-box text-item" placeholder="Your name" required/>
                <input type="email" name="email" class="text-box text-item" placeholder="Your email" required/>
                <textarea name="message" rows="5" class="text-area" placeholder="Your message" required/>
                <input type="submit" name="submit" class="send-btn" value="send"/>
            </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact