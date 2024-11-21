import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "../../components/banner/banner";
import './contact_component.css'
import colors from "../../../assets/colors/colors";
import emailjs from '@emailjs/browser'
import discord from "../../../assets/logos/discord.png"
import instagram from "../../../assets/logos/instagram.png"
import linkedin from "../../../assets/logos/linkedin.png"
import github from "../../../assets/logos/github.png"

function Contact_Component() {

    // const form = useRef(); 
    // const sendEmail = (e) => { e.preventDefault(); emailjs .sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY ) .then( (result) => { alert('message sent successfully...'); console.log(result.text); }, (error) => { console.log(error.text); } ); }; 


    return (
        <div>
            <div className="contact" style={{ background: colors.backgroung }}>
            <div>
                <h1>Contactez-moi pour une idée de projet :)</h1>
            </div>
            <div className="contact_inputs">
            <div>
                <p>Nom</p>
                <input type="text" name="name" required/> 
            </div>
            <div>
                <p>Mail</p>
                <input type="mail" name="email" required/> 
            </div>
            <div>
                <p>Téléphone</p>
                <input type="phone" name="phone" required/> 
            </div>
            <div>
                <p>Projet(s)</p>
                <input type="text" name="subject" required/> 
            </div>
            <input type='submit' value='Submit' id='input-submit' /> 
            </div>       
            <div className="menu_links_socials">
                <div><Link to="https://discord.gg/5KEARqNJux" target="_blank"><img src={discord}/></Link></div>
                <div><Link to="https://www.instagram.com/hugo_paynaud/" target="_blank"><img src={instagram}/></Link></div>
                <div><Link to="https://www.linkedin.com/in/hugo-paynaud/" target="_blank"><img src={linkedin}/></Link></div>
                <div><Link to="https://github.com/Kurdant" target="_blank"><img src={github}/></Link></div>
            </div>
            </div>
        </div>
                            /* <div> <h1>Contact Form</h1> 
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
                </div> */
            /* <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="ffbb96a8-ea80-4ce1-804d-2477a103f326"/> 
                <input type="text" name="name"/> 
                <input type="text" name="subject"/> 
                <input type="text" name="email" /> 
                <input type="text" name="phone" /> 
                <textarea name="message"></textarea> 
                <input type="hidden" name="replyTo" value="@"/> 
                <input type="hidden" name="redirectTo" value="https://example.com/contact/success"/> 
                <input type="submit" value="Submit" />
            </form> */

    )
}

export default Contact_Component;

// service_zekwf88

// template_b62os77
