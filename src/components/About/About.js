import React from 'react'
import './AboutCss.css';
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import Navbar from '../Navbar/Navbar';



const About = () => {

    return(

     
        <>
        <div className='aboutFadeIn'>

       
            <Navbar /> 

      

            <div className='aboutTopPage'>   
            </div>


            <div className="about">
         

                <div>
                    <div className="theStudioTitle">
                        <h2>TheStudio.</h2>
                    </div>
                    <div className="theStudioText">
                        <p>Slōw Creative Studio is a full-service design studio working on brand strategy, art direction, graphic design and digital projects.</p>    
                        <br></br>
                        <p>The Slōw Creative Studio is based in Biarritz, south west of France.</p>
                        <br></br>
                        <p>Our goal is to take the time to support our clients in order to provide each of our projects with a unique identity.</p>
                    </div>
                </div>

                <div>
                    <div className="theVibesTitle">
                        <h2>TheVibes.</h2>
                    </div>
                    <div className="theVibesText">
                        <p>Moved by surf and rock spirits, we create modern and fun concepts. Our life by the ocean is an endless inspiration.</p>
                        <br></br>
                        <p>Take it Slōw. To take the time to enjoy life. To take the time to produce high quality work.</p>
                        <br></br>
                        <p>Still the Slōw design is more than that. It’s a way to think to ensure sustainability in our creations. We deliver identities which are cool for now, and which will be great in the future too.</p>
                    </div>
                </div>


            </div>

            <div className='aboutBottomPage'>
            </div>

            <Footer />
        </div>
        </>
      
    )
    
}

export default About ;