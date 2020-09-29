import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProjectsPage from './components/Projects/ProjectsPage';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Copyright from './components/Footer/Copyright';
import GeneralTerms from './components/Footer/GeneralTerms';
import PersonalData from './components/Footer/PersonalData';
import Burger from './components/ResponsiveBurgerNavbar/Burger';
import OneFullProject from './components/Projects/OneFullProject';
import Cetus from './components/Projects/notUsed/Cetus';
import Quiksilver from './components/Projects/notUsed/Quiksilver';
import ScrollToTop from 'react-router-scroll-top'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects : []
    };
  }

  componentDidMount() {
    this.getProject();
  }

  getProject = () => {
    fetch (`https://enigmatic-forest-39099.herokuapp.com/projects`)
    .then(response => response.json())
    .then(data => {
        this.setState({ projects : data})
    })
  }


  render(){
    const { projects } = this.state ;
    

  return (
    <>
    <div className="appDiv">  
     
      <Burger />
   
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projectsPage' render={() => <ProjectsPage projects={projects} />} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/copyright' component={Copyright} />
        <Route path='/generalTerms' component={GeneralTerms} />
        <Route path='/personalData' component={PersonalData} />
        <Route path='/CetusBiarritz.' component={Cetus} />
        <Route path='/Quiksilver.' component={Quiksilver} />
        <Route path='/project/:id' render={(routeProps) => <OneFullProject routeProps={routeProps} projects={projects} />} />
      </Switch>

      <ScrollToTop/>
      
    </div>
    </>
  );
}
}

export default App;

