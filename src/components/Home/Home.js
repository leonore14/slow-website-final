import React from 'react';
import "./HomeCss.css";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from '../Footer/Footer';
import arrowdown from '../images/slow-creative-arrow-down.svg';
import arrowup from '../images/slow-creative-arrow-up-wht.svg';
import Navbar from '../Navbar/Navbar';
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';


const Home = () => (
 
  <ReactFullpage
    //fullpage options
    licenseKey = {process.env.REACT_APP_FULLPAGE_API_KEY}
    scrollingSpeed = {1000} /* Options here */
  

    render={({ state, fullpageApi }) => {

      const specialClick = (e) => {
        if(e.target.tagName === 'DIV'){
          fullpageApi.moveSectionDown()
        }
      }
      

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
              <div className="home2Left">
              </div>
              <div className="home2Right">
              </div>
            </div>
          </div>   

          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
                  <div className="homeP2">
                      <p>We propose to help you to establish your brand identity, creating strong logotypes and wordmarks.</p>
                      <p>We will also develop your visual identity on the different supports you may need.</p>
                  </div>
          </div>

          <div className="section" onClick={specialClick}>
              <div className="homeLinkProjectsPage">
                <div className="homeLinkProjectsDiv">
                  <div className="line-animation">
                    <Link to='/project/1'>View Project</Link>
                  </div>
                </div>
              </div>
          </div>

        <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
                  <div className="yin">
                  </div>
          </div>

          <div className="section" onClick={() => fullpageApi.moveSectionDown()}>
                  <div className="homeP3">
                      <p>Being visible on Internet has become essential for any company.</p>
                      <p>We offer you to build modern and dynamic websites to facilitate and improve your development.</p>
                  </div>
          </div>

          <div className="section">
            <div className='home4'>
              <div className="home4Left">
              </div>
              <div className="home4Right">
                  <div className="upArrow" onClick={() => fullpageApi.moveTo(1)}>
                    <img alt="" src={arrowup} className="upArrowStyle" />
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
