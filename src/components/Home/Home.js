import React from 'react';
import "./HomeCss.css";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../Footer/Footer';
import arrowdown from '../images/slow-creative-arrow-down.svg';
import arrowup from '../images/slow-creative-arrow-up-wht.svg';
import Navbar from '../Navbar/Navbar';
import "animate.css/animate.min.css";



const Home = () => (
 
  <ReactFullpage
    //fullpage options
    licenseKey = {process.env.REACT_APP_FULLPAGE_API_KEY}
    scrollingSpeed = {1000} /* Options here */
  

    render={({ state, fullpageApi }) => {

      return (

        <>
        <div className="homeFadeIn">

        <ReactFullpage.Wrapper>

          <Navbar />    

          <div className="section">
            <div className='home1'>
              <div className="homeText1" onClick={() => fullpageApi.moveSectionDown()}>
                <div className='homeContainerLeft1'>
                  <div className="homeTitle1">
                    <h1>Let's</h1>
                    <h1>Take It Slōw</h1>
                  </div>
                  <div className="homeP1">
                    <p>Graphism and Digital Studio</p>
                    <p>We take the time to listen to your wishes</p>
                    <p>to achieve great projects together.</p>
                  </div>
                </div>
                <div className='homeContainerRight1'>
                  <div className="downArrow bounce">
                    <img alt="" src={arrowdown} className="downArrowStyle" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
            <div className='home2'>
            </div>
          </div>
     

          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
              <div className="homeText2">
                  <div className="homeTitle2">
                      <h1>BRAND</h1>
                      <h1>IDENTITY</h1>
                  </div>
                  <div className="homeP2">
                      <p>We propose to help you to establish your Brand Identity, creating strong logotypes and wordmarks.</p>
                      <p>We will also develop your visual identity on the different supports you may need.</p>
                  </div>
              </div>
          </div>

          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
            <div className='home3'>
            </div>
          </div>

          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
              <div className="homeText3">
                <div className="homeTitle3">
                      <h1>DIGITAL</h1>
                  </div>
                  <div className="homeP3">
                      <p>Being visible on Internet has become essential for any company.</p>
                      <p>We offer you to build modern and dynamic websites to facilitate and improve your development.</p>
                  </div>
              </div>
          </div>

          <div className="section">
            <div className='home4'>
              <div className="homeText4">
                <div className='homeContainerLeft4'>
                </div>
                <div className='homeContainerRight4'>
                  <div className="upArrow" onClick={() => fullpageApi.moveTo(1)}>
                    <img alt="" src={arrowup} className="upArrowStyle" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="section fp-auto-height">
            <Footer />
          </div>
          
        </ReactFullpage.Wrapper>
        </div>
        </>
      
      );
    }}
  />
)

export default Home;
