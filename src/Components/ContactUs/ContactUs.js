import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../../images/Frame 22.png";

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_4sbnzz2",
                "template_biwdxwx",
                form.current,
                "AzaW5tZINXYq-btn-"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("message send");
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.preventDefault();
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
                    <img className="img-fluid" src={contactImg} alt="" />
                </div>
                <div className="col-md-6 mt-5">
                    <div className="contact-us">
                        <div className="header-text mb-5">
                            <p>Contact Us</p>
                            <h1>Fill The Form And Email Us</h1>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="user_name"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email
                                </label>
                                <input
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    type="email"
                                    name="user_email"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                />
                            </div>
                            <input
                                className="common-button"
                                type="submit"
                                value="Send"
                                autoComplete="off"
                                required
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
