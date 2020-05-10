import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import './App.css';

import MyHome from './Containers/Home/Home';
import Contact from './Components/ContactForm/ContactForm'
import MyNavbar from './Components/MyNavbar/MyNavbar';
import MyFooter from './Components/MyFooter/MyFooter';


function App() {
  return (
    
      <Container>
        <Router>
        <Header><MyNavbar/></Header>
        <Content></Content>
        <Footer><MyFooter/></Footer>
        </Router>
      </Container>
     
  );
}

export default App;
