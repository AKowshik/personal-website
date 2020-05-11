import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Container, Header, Content, Footer } from 'rsuite';
import MyNavbar from './Components/MyNavbar/MyNavbar';
import MyFooter from './Components/MyFooter/MyFooter';
import './App.css';

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
