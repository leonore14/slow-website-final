import React from 'react';
import funnyslow from '../images/slow-smile-animated.gif';
import './ContactCss.css';
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import Navbar from '../Navbar/Navbar';



class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    
    render() {
    const { status } = this.state;
    
    return (

        <>
        <div className='contactFadeIn'>

        <Navbar /> 

        <div>

        <div className='contactTopPage'>   
        </div>

        <div className="contact">
            
            <div>
                <div className="contactProject">
                    <h2>Got a new project ?</h2>
                </div>
                <div className="contactProjectText">
                    <p>Feel free to send us an <a href="mailto:contact@slowcreativestudio.com">email</a> to tell us more about your project.</p>
                </div>
            </div>

            <div>
                <div className="contactDiscover">
                    <h2>Curious to discover more ?</h2>
                </div>
                <div className="contactDiscoverText">
                    <p>Have a look at our <a target="blank" href='https://www.instagram.com/slow.creative/'>Instagram</a> account !</p>
                </div>
            </div>

            <div>
                <div className="contactFormTitle">
                    <h2>ContactUs.</h2>
                </div>
                <form className="contactForm"
                        onSubmit={this.submitForm}
                        action="https://formspree.io/xpzybpkp"
                        method="POST"
                >
                        <div className="formBoxDiv"><input type="text" placeholder="Name*" name="title" className="formBox" /></div>
                        <div className="formBoxDiv"><input type="email" placeholder="Email*" name="email" className="formBox" /></div>
                        <div className="formBoxDiv"><input type="text" placeholder="Phone" name="phone" className="formBox" /></div>
                        <div className="formBoxDiv"><textarea type="text" placeholder="Message*" name="message" className="formBoxMessage" rowSpan={3} /></div>
                        {status === "SUCCESS" ? <p>Thanks! We will reply you soon !</p> : <div className="formButtonBox"><button className="formButton">Send.</button></div>}
                        {status === "ERROR" && <p>Ooops! There was an error. Please try again to fill in our form !</p>}  
                </form>
            </div>

            <div>
                <div className="contactAnything">
                    <h2>Anything else to say ?</h2>
                </div>
                <div className="contactSlowStudio">
                    <div className="contactSlowStudioText">
                        <a target="blank" href="https://www.google.com/maps/place/48+Avenue+du+Pr%C3%A9sident+J+F+Kennedy,+64200+Biarritz/@43.4713316,-1.5577687,17z/data=!3m1!4b1!4m5!3m4!1s0xd51152b71c332bd:0x52441abeac86d5df!8m2!3d43.4713316!4d-1.55558">
                            <p>Slõw Creative Studio</p>
                            <p>48 Avenue du President Kennedy</p>
                            <p>64200 Biarritz</p>
                            <p>France</p>
                        </a>
                        <br></br>
                        <a href="tel:+3368509381">
                            <p>+33 6 88 50 93 81</p>
                        </a>
                        <br></br>
                        <p><a href="mailto:contact@slowcreativestudio.com">contact@slowcreativestudio.com</a></p>
                    </div>
                    <div className="funnySlow">
                        <img src={funnyslow} alt="funny-slow" />
                    </div>
                </div>
            </div>
        </div>

        <div className='contactBottomPage'>
        </div>

        </div>

        <Footer />

        </div>
        </>
        

        )
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
        } else {
            this.setState({ status: "ERROR" });
        }
        };
        xhr.send(data);
    }

}

export default Contact ;