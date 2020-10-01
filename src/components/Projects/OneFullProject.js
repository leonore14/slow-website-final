import React from "react";
import "./ProjectsCss.css";
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import ReactFullpage from '@fullpage/react-fullpage';
import arrowupBlack from '../images/slow-creative-arrow-up.svg';
import FullPageBurger from '../FullBurger/FullPageBurger';



const OneFullProject = ({ routeProps, projects }) => (
  
  <ReactFullpage

    licenseKey = {process.env.REACT_APP_FULLPAGE_API_KEY}
    scrollingSpeed = {1000} /* Options here */
    

  
    render={({ state, fullpageApi }) => {

      const matchProject = projects.find(project => (
      +routeProps.match.params.id === project.id
      ))
  
      return (
        
        <ReactFullpage.Wrapper>

          
          <div className="oneFullProjectContainer">

                <div>
                  <FullPageBurger />
                </div>

                <div className="section">
                  <img className="oneFullProjectImage1" src={matchProject.ProjectImage1.formats.large.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>

                <div className="section">
                  <div className="oneFullProjectLongDescription" onClick={() => fullpageApi.moveSectionDown()}>
                    <div className="oneFullProjectText">
                      <p>{matchProject.ProjectLongDescription1}</p>
                      <p>{matchProject.ProjectLongDescription2}</p>
                      <p>{matchProject.ProjectLongDescription3}</p>
                      <div className='oneFullProjectDash'></div>
                    </div>
                  </div>
                </div>

                <div className="section">
                  <img className="oneFullProjectImage2" src={matchProject.ProjectImage2.formats.large.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>

                <div className="section">
                  <img className="oneFullProjectImage3" src={matchProject.ProjectImage3.formats.large.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>

                <div className="section">
                  <img className="oneFullProjectImage4" src={matchProject.ProjectImage4.formats.large.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>

                <div className="section">
                  <div className="bottomOneFullPageContainer">
                    <div className="imageContainer">
                      <img 
                        className="oneFullProjectImage5" 
                        src={matchProject.ProjectImage5.formats.large.url} 
                        alt={matchProject.ProjectName} 
                        onClick={() => fullpageApi.moveSectionUp()} />
                    </div>
                    <div className="upArrow" onClick={() => fullpageApi.moveTo(1)}>
                      <img alt="" src={arrowupBlack} className="upArrowStyle" />
                    </div>
                  </div>
                </div>

                <div className="section fp-auto-height">
                  <Footer />
                </div>

          </div>
        
        </ReactFullpage.Wrapper>

      )
    
    }}
  />
)


export default OneFullProject;