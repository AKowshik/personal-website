import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import { Link, Route } from 'react-router-dom';
import Contact from '../../Containers/Contact/Contact';
import MyHome from '../../Containers/Home/Home';

import navStyles from './MyNavbar.module.css';
import { Switch } from 'react-router-dom';

class MyNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navStyle: navStyles.myNavbar,
            navbarColor: "transparent"
        }
    }


    listenScrollEvent = () => {
        if (window.scrollY > 29) {
          this.setState({navStyle: navStyles.myNavbarAlt});
          this.setState({navbarColor: "white"});
        } else {
          this.setState({navStyle: navStyles.myNavbar});
          this.setState({navbarColor: "transparent"});
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

    render() {

        const textStyle = {
            fontSize: "medium",
            color: "black",
        }

        return (
            <div>
                    <Navbar appearance="subtle" className={this.state.navStyle} style={{backgroundColor: this.state.navbarColor}}>
                        <Navbar.Body>
                            <Nav>
                            <Link to="/"><Nav.Item><p style={textStyle}>Ankith C K</p></Nav.Item></Link>
                                <Nav.Item><p style={textStyle}>Projects </p></Nav.Item>
                                <Nav.Item><p style={textStyle}>Blog</p></Nav.Item>
                            </Nav>
                            <Nav pullRight>
                               <Link to="/contact"> <Nav.Item><p style={textStyle}>Contact</p></Nav.Item></Link>
                            </Nav>
                        </Navbar.Body>
                    </Navbar>

                    <Switch>
                        <Route path="/contact" exact>
                            <Contact/>
                        </Route>
                        <Route path="/" exact>
                            <MyHome/>
                        </Route>
                    </Switch>
            </div>
        );
    }
}


export default  MyNavbar;