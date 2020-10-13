import React from "react";
import "./OneFullProjectCss.css";
import Footer from '../Footer/Footer';
import '../Footer/FooterCss.css';
import ReactFullpage from '@fullpage/react-fullpage';
import arrowupBlack from '../images/slow-creative-arrow-up.svg';
import Navbar from '../Navbar/Navbar';



const OneFullProject = ({ routeProps, projects }) => (
  
  <ReactFullpage

    licenseKey = {process.env.REACT_APP_FULLPAGE_API_KEY}
    scrollingSpeed = {1000} /* Options here */
    

  
    render={({ state, fullpageApi }) => {

      const matchProject = projects.find(project => (
      +routeProps.match.params.id === project.id
      ))

  
      return (
        <>
        <div className="projectsFadeIn">
        
        <ReactFullpage.Wrapper>

        <Navbar />
        
          <div className="oneFullProjectContainer">

                <div className="section">
                  <img className="oneFullProjectImage1" src={matchProject.ProjectImage1.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>
                
                { matchProject.ProjectLongDescription1 && matchProject.ProjectLongDescription2 && matchProject.ProjectLongDescription3 &&
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
                }
                
                { matchProject.ProjectImage2 && 
                <div className="section">
                  <img className="oneFullProjectImage2" src={matchProject.ProjectImage2.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>
                }

                { matchProject.ProjectImage3 && matchProject.ProjectImage5 &&
                <div className="section">
                  <div className="projectDoubleImg1">
                    <div className='projectSection3'>
                      <img className="oneFullProjectImage3" src={matchProject.ProjectImage3.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                    </div>
                    <div className="projectSection5">
                      <img className="oneFullProjectImage5" src={matchProject.ProjectImage5.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                    </div>
                  </div>
                </div>
                }

                { matchProject.ProjectImage4 && 
                <div className="section">
                  <img className="oneFullProjectImage4" src={matchProject.ProjectImage4.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionDown()} />
                </div>
                }

                { matchProject.ProjectImage7 && matchProject.ProjectImage8 && 
                <div className="section">
                  <div className="projectDoubleImg2">
                    <div className='projectSection7'>
                      <img className="oneFullProjectImage7" src={matchProject.ProjectImage7.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionUp()} />
                    </div>
                    <div className="projectSection8">
                      <img className="oneFullProjectImage8" src={matchProject.ProjectImage8.url} alt={matchProject.ProjectName} onClick={() => fullpageApi.moveSectionUp()} />
                      <div className="upArrow" onClick={() => fullpageApi.moveTo(1)}>
                        <img alt="" src={arrowupBlack} className="upArrowStyle" />
                      </div>
                    </div>
                  </div> 
                </div>
                }

                <div className="section fp-auto-height">
                  <Footer />
                </div>

          </div>
        
        </ReactFullpage.Wrapper>
        </div>
        </>
      )
    
    }}
  />
)


export default OneFullProject;