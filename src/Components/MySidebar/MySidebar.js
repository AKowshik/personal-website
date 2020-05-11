import React from 'react';
import { Nav } from 'rsuite';
import { Icon } from 'semantic-ui-react'

const sidebarStyle = {
    // position: "absolute",
    width: "45px",
    // marginLeft: "15px",
    // bottom: "10vh",
}

const mySidebar = () => {
    return (
        <Nav vertical style={sidebarStyle}>
            <Nav.Item href='//github.com/AKowshik' 
                      target='_blank' 
                      icon={<Icon inverted fitted name="github" 
                      size='large' />}>
            </Nav.Item>

            <Nav.Item href='//linkedin.com/in/ankith-c-kowshik-306860168/' 
                      target='_blank' 
                      icon={<Icon inverted fitted name='linkedin' 
                      size='large' />}>
            </Nav.Item>

            <Nav.Item href='//www.instagram.com/ankith_c_kowshik/' 
                      target='_blank' 
                      icon={<Icon inverted fitted name='instagram' size='large' />}>
            </Nav.Item>
        </Nav>
    )
}

export default mySidebar;