import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import Contact from '../Contact/Contact';

import './MyNavbar.css';

class MyNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.showContactsHandler = this.showContactsHandler.bind(this);
    }

    showContactsHandler = () => {
        console.log("Clicked")
        this.setState({show: true });
        console.log(this.state.show);
    }

    render() {
        return (
            <div className='myNavbar'>
                    <Navbar appearance="subtle">
                        <Navbar.Body>
                            <Nav>
                                <Nav.Item>Ankith C K</Nav.Item>
                                <Nav.Item>Projects</Nav.Item>
                                <Nav.Item>Blog</Nav.Item>
                            </Nav>
                            <Nav pullRight>
                                <Nav.Item onClick={this.showContactsHandler}>Contact</Nav.Item>
                                <Contact show={this.state.show} />
                            </Nav>
                        </Navbar.Body>
                    </Navbar>
            </div>
        );
    }
}


export default  MyNavbar;