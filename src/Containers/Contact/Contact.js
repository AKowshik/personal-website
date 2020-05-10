import React, { Component } from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';


class Contact extends Component {

    render() {

        const formStyle = {
            paddingLeft: "30vw",
            paddingRight: "30vw",
            paddingBottom: "5vh",
            paddingTop: "5vh"
        }

        const heading = {
            fontSize: "20px",
        }

        const email = {
            fontSize: "15px",
            textAlign: "center"
        }

        return(
            <div style={formStyle}>
                <p style={heading}>Send me an email</p>
                <ContactForm/>
                <br/>
                <p style={email}>ankith.kowshik@gmail.com</p>
            </div>
        );
    }
}

export default Contact;