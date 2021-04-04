import React, { Component } from 'react';
// import { validateEmail } from '../../utils/helpers';

class ContactForm extends Component {
    render() {
        return (
            <section className="section-title container"> 
            <h1>Contact Me</h1>
            <hr></hr>
            <br />
                <div className="row justify-content-center">
                <div className="col-10 section-content">
                        <h2 className="font-weight-bold">
                        <a href="mailto:nick.ovalles@gmail.com">Email: nick.ovalles@gmail.com</a></h2>
                        <br />
                        <br />
                        <div>
                        <h2 className="font-weight-bold">
                        <a href="2403702196">Phone: 240-370-2196 </a></h2>
                        </div>
                        <br />
                </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;