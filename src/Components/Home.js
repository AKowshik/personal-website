import React, { Component } from 'react';
import { Navbar, Nav, Icon, Divider } from 'rsuite';
import '../index.css'

class MyHome extends Component {

    render() {
        return (
            <div>
                {this.navbar_top()}

                {this.weblinks()}
                
                {this.bio()}

                {this.scroll_down_page()}

                {this.footer()}

            </div>
        )
    }

    navbar_top = () => {
        return (
            <div className='myheader'>
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
            </div>
        );
    }

    bio = () => {
        return (
            <div className='mybio'>
                <h1>Ankith C Kowshik</h1>
                <p>Passionate software delveoper exploring the world<br/> of computer science. Documenting the <br/> process on the way.</p>
            </div>
        )
    }  

    scroll_down_page = () => {
        return (
            <div className='arrow'>
                <Icon icon='angle-down' size='3x'/>
            </div>
        )
    }
    weblinks = () => {
        return (
            <div className="mylinks">
                <Nav vertical >
                    <Nav.Item href='//github.com/AKowshik' target='_blank' icon={<Icon icon="github" size='lg' />}></Nav.Item>
                    <Nav.Item href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank' icon={<Icon icon='linkedin' size='lg' />}></Nav.Item>
                    <Nav.Item href='//www.instagram.com/ankith_c_kowshik/' target='_blank' icon={<Icon icon='instagram' size='lg' />}></Nav.Item>
                </Nav>
            </div>
        )
    }

    

    footer = () => {
        return (
            <div className='myfooter'>
                    <a href='//github.com/AKowshik' target='_blank'>GitHub</a>
                    <Divider vertical />
                    <a href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank'>LinkedIn</a>
                    <Divider vertical />
                    <a href='//www.instagram.com/ankith_c_kowshik/' target='_blank'>Instagram</a>
            </div>

        )
    }
}

    


export default MyHome;