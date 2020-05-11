import React, { Component } from 'react';
import { Navbar, Nav } from 'rsuite';
import { Link, Route } from 'react-router-dom';
import Contact from '../../Containers/Contact/Contact';
import MyHome from '../../Containers/Home/Home';
import navStyles from './MyNavbar.module.css';
import { Switch } from 'react-router-dom';
import Blog from '../../Containers/Blog/Blog';

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
            this.setState({ navStyle: navStyles.myNavbarAlt });
            this.setState({ navbarColor: "white" });
        } else {
            this.setState({ navStyle: navStyles.myNavbar });
            this.setState({ navbarColor: "transparent" });
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
                <Navbar appearance="subtle" className={this.state.navStyle} style={{ backgroundColor: this.state.navbarColor }}>
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item componentClass={Link} to="/">
                                <p style={textStyle}>Ankith C K</p>
                            </Nav.Item>
                            <Nav.Item componentClass={Link} to="/projects">
                                <p style={textStyle}>Projects </p>
                            </Nav.Item>
                            <Nav.Item componentClass={Link} to="/blog">
                                <p style={textStyle}>Blog</p>
                            </Nav.Item>
                        </Nav>
                        <Nav pullRight>
                            <Nav.Item componentClass={Link} to="/contact">
                                <p style={textStyle}>Contact</p>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>

                <Switch>
                    <Route exact path="/contact" >
                        <Contact />
                    </Route>
                    <Route exact path="/blog" >
                        <Blog />
                    </Route>
                    <Route exact path="/" >
                        <MyHome />
                    </Route>
                </Switch>
            </div>
        );
    }
}


export default MyNavbar;