import React, {useRef} from "react";
import Banner from "../../components/banner/banner";
import './contact.css'
import colors from "../../../assets/colors/colors";
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef(); 
    const sendEmail = (e) => { e.preventDefault(); emailjs .sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY ) .then( (result) => { alert('message sent successfully...'); console.log(result.text); }, (error) => { console.log(error.text); } ); }; 


    return (
        <div>
            <Banner title="CONTACTE" />
            <div className="contact" style={{ background: colors.backgroung }}>
                <h1>Si vous souhaitez me contacter </h1>
                    <div>
                        
                    </div>
            </div>
                            {/* <div> <h1>Contact Form</h1> 
                <form className='cf' ref={form} onSubmit={sendEmail}> 
                <div className='half left cf'> 
                            <input type='text' placeholder='Name' name='user_name' /> 
                            <input type='email' placeholder='Email address' name='user_email' /> 
                        </div> 
                            <div className='half right cf'> 
                                <textarea name='message' type='text' placeholder='Message'></textarea> 
                            </div> 
                        <input type='submit' value='Submit' id='input-submit' /> 
                    </form> 
                </div> */}
            {/* <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="ffbb96a8-ea80-4ce1-804d-2477a103f326"/> 
                <input type="text" name="name"/> 
                <input type="text" name="subject"/> 
                <input type="text" name="email" /> 
                <input type="text" name="phone" /> 
                <textarea name="message"></textarea> 
                <input type="hidden" name="replyTo" value="@"/> 
                <input type="hidden" name="redirectTo" value="https://example.com/contact/success"/> 
                <input type="submit" value="Submit" />
            </form> */}
        </div>
    )
}

export default Contact;

// service_zekwf88

// template_b62os77
