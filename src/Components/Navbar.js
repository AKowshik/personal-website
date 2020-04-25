import React from 'react';
import { Navbar, Nav } from 'rsuite';

const navbar = () => {
    return (
        <div>
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

export default navbar