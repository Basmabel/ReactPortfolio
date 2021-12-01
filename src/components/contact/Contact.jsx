import "./contact.scss"
import { useState } from "react";

export default function Contact() {
    
    const [message, setMessage] = useState(false)
    const Submit = (elem) =>{
        elem.preventDefault();
        setMessage(true)
    }
    return (
        <div className ="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit = {Submit}>
                    <input type= "text" placeholder="Email"/>
                    <textarea placeholder= "Message"></textarea>
                    <button type ="submit">Send</button>
                    {message && <span> Thank you for your message :D</span>}
                </form>
            </div>
        </div>
    )
}