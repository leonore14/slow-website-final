import React, { Component } from 'react';
import ScrollToTop from 'react-router-scroll-top'
import { Switch, Route } from 'react-router-dom';
import ProjectsPage from '../Projects/ProjectsPage';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Copyright from '../Footer/Copyright';
import GeneralTerms from '../Footer/GeneralTerms';
import PersonalData from '../Footer/PersonalData';
import Burger from '../ResponsiveBurgerNavbar/Burger';
import OneFullProject from '../Projects/OneFullProject';
import './App.css';



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
        <Route path='/project/:id' render={(routeProps) => projects.length > 0 && <OneFullProject routeProps={routeProps} projects={projects} />} />
      </Switch>

      <ScrollToTop/>
      
    </div>
    </>
  );
}
}

export default App;

