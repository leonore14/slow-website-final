import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import GeneralTerms from './components/Footer/GeneralTerms';
import PersonalData from './components/Footer/PersonalData';
import Burger from './components/ResponsiveBurgerNavbar/Burger';


function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Burger />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/copyright' component={Copyright} />
        <Route path='/generalTerms' component={GeneralTerms} />
        <Route path='/personalData' component={PersonalData} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

