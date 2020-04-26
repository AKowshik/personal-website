import React, { Component } from 'react';
import { Navbar, Nav, Icon, Footer, Divider } from 'rsuite';
import '../index.css'

class MyHome extends Component {

    render() {
        return (
            <div>
                <div className='myheader'>
                    {this.navbarTop()}
                </div>
                <div className="mylinks">
                    {this.weblinks()}
                </div>
                <div className='myfooter'>
                    {this.footer()}
                </div>
            </div>
        )
    }

    navbarTop = () => {
        return (
            <Navbar appearance="subtle">
                <Navbar.Body>
                    <Nav>
                        <Nav.Item>Ankith C K</Nav.Item>
                        <Nav.Item>Projects</Nav.Item>
                        <Nav.Item>Blog</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item>Contact</Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        );
    }

    weblinks = () => {
        return (
            <Nav vertical >
                <Nav.Item href='//github.com/AKowshik' target='_blank' icon={<Icon icon="github" size='lg' />}></Nav.Item>
                <Nav.Item href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank' icon={<Icon icon='linkedin' size='lg' />}></Nav.Item>
                <Nav.Item href='//www.instagram.com/ankith_c_kowshik/' target='_blank' icon={<Icon icon='instagram' size='lg' />}></Nav.Item>
            </Nav>
        )
    }

    footer = () => {
        return (
            <Footer style={{ textAlign: "center"}}>
                    <a href='//github.com/AKowshik' target='_blank'>GitHub</a>
                    <Divider vertical />
                    <a href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank'>LinkedIn</a>
                    <Divider vertical />
                    <a href='//www.instagram.com/ankith_c_kowshik/' target='_blank'>Instagram</a>
            </Footer>

        )
    }
}
export default MyHome;