import React, { useEffect, useRef,useState }from 'react';
import './contact.css'
import facebookIcon from '../../assets/facebook-icon.png'
import instaIcon from "../../assets/instagram.png"
import youtubeIcon from '../../assets/youtube.png'
import twitterIcon from '../../assets/linkdin.png'
import emailjs from '@emailjs/browser';
  



const Contact = () => {
  const [inputValue, setInputValue] = useState({
    your_name:"",
    your_email:"",
    message:""
  });

const inputHandler=(e)=>{
  console.log("hi");
  const name=e.target.name;
  const value=e.target.value;
  setInputValue(prevInputValue=>{
    return{
      ...prevInputValue,
      [name]:value
    }
    
  })
}
// useEffect(()=>{console.log(inputValue)},[inputValue]);
const clearInput = () => {
   

  };

 
    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();
        setInputValue({ your_name: '', your_email: '', message: '' });
    
        emailjs
          .sendForm('service_ysn4qpm', 'template_mclki0h', form.current, {
            publicKey: 'q69cSgo6K2ltHWf60zB_0',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
         
      };

  return (
   <section id="contact">
    <span className="contactTitle">Contact Me</span>
    <span className="contactDescription">Please fill out the form below to discuss and Work Opportunity.</span>
    <div className="form" >
        <form className='contactForm' ref={form} >
            <input type="text" placeholder='Your Name' onChange={inputHandler}  value={inputValue.your_name} id='input' className='name' name='your_name'/>
            <input type="email" placeholder='Your Email' onChange={inputHandler}  value={inputValue.your_email} id='input'className='email' name='your_email'/>
            <textarea name="message" placeholder='Your Message' onChange={inputHandler} id='input'  value={inputValue.message} className="msg" cols="30" rows="6"></textarea>
           <button className='submit'  onClick={sendEmail} value="Send">Send</button>
          
        </form>
        <div className="iconLinks">
            <a href="https://www.instagram.com/messy_soul_1817?igsh=MWxpMHoyZmYwenQ3MA=="><img src={facebookIcon} alt="facebook" className="link" /></a>
           <a href="https://www.instagram.com/messy_soul_1817?igsh=MWxpMHoyZmYwenQ3MA=="> <img src={instaIcon} alt="instagram" className="link" /></a>
           <a href="https://youtube.com/@krishitajoshi-us4dn?si=9EcL-larOG4baapC"><img src={youtubeIcon} alt="youtube" className="link" /></a>
           <a href="https://www.linkedin.com/in/krishita-joshi-a2874627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={twitterIcon} alt="twitter" className="link" /></a>
        </div>
    </div>
   </section>
  )
}

export default Contact