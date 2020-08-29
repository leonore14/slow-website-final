import React, { Component} from 'react';
import funnyslow from '../images/funnyslow.jpg';
import './ContactCss.css';
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';


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
                        <p>Slõw Creative Studio</p>
                        <p>48 Avenue du President Kennedy</p>
                        <p>64200 Biarritz</p>
                        <p>France</p>
                        <br></br>
                        <p>+33 6 88 50 93 81</p>
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