import React from 'react';
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Talk to me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">user@gmail.com</span>

                            <a href="mailto:examplemail@gmail.com.com" className="contact_button">Write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-whatsapp contact_card-icon"></i>

                            <h3 className="contact_card-title">WhatsApp</h3>
                            <span className="contact_card-data">999-888-777</span>

                            <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact_button">Write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bxl-messenger contact_card-icon"></i>

                            <h3 className="contact_card-title">Messenger</h3>
                            <span className="contact_card-data">user.fb123</span>

                            <a href="https://m.me/crypticalcoder" className="contact_button">Write me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Write me your project</h3>

                    <form className="contact_form">
                        
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;