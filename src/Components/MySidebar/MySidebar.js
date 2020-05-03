import React from 'react';
import { Nav } from 'rsuite';
import { Icon } from 'semantic-ui-react'

import './MySidebar.css';


const mySidebar = () => {
    return (
        <div className="mySidebar">
            <Nav vertical >
                <Nav.Item href='//github.com/AKowshik' target='_blank' icon={<Icon fitted name="github" size='large' />}></Nav.Item>
                <Nav.Item href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank' icon={<Icon fitted name='linkedin' size='large' />}></Nav.Item>
                <Nav.Item href='//www.instagram.com/ankith_c_kowshik/' target='_blank' icon={<Icon fitted name='instagram' size='large' />}></Nav.Item>
            </Nav>
        </div>
    )
}

export default mySidebar;