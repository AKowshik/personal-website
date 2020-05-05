import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import Contact from '../Contact/Contact';

import './MyNavbar.css';
import { createPortal } from 'react-dom';

class MyNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            navbarType: "myNavbar",
            navbarColor: "transparent"
        }
        this.showContactsHandler = this.showContactsHandler.bind(this);
    }

    showContactsHandler = () => {
        console.log("Clicked")
        this.setState({show: true });
        console.log(this.state.show);
    }

    listenScrollEvent = () => {
        if (window.scrollY) {
          this.setState({navbarColor: 'white'});
          this.setState({navbarType: 'myNavbarOnScroll'});
        } else {
          this.setState({navbarColor: 'transparent'});
          this.setState({navbarType: 'myNavbar'});
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

        const navbarStyling = {
            backgroundColor: this.state.navbarColor
        }

        return (
            <div className={this.state.navbarType} style={navbarStyling}>
                    <Navbar appearance="subtle" style={navbarStyling}>
                        <Navbar.Body>
                            <Nav>
                                <Nav.Item><p style={textStyle}>Ankith C K</p></Nav.Item>
                                <Nav.Item><p style={textStyle}>Projects </p></Nav.Item>
                                <Nav.Item><p style={textStyle}>Blog</p></Nav.Item>
                            </Nav>
                            <Nav pullRight>
                                <Nav.Item onClick={this.showContactsHandler}><p style={textStyle}>Contact</p></Nav.Item>
                                <Contact show={this.state.show} />
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
            </div>
        );
    }
}


export default  MyNavbar;