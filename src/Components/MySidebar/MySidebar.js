import React from 'react';
import { Nav, Icon } from 'rsuite';

import './MySidebar.css';


const mySidebar = () => {
    return (
        <div className="mySidebar">
            <Nav vertical >
                <Nav.Item href='//github.com/AKowshik' target='_blank' icon={<Icon icon="github" size='lg' />}></Nav.Item>
                <Nav.Item href='//linkedin.com/in/ankith-c-kowshik-306860168/' target='_blank' icon={<Icon icon='linkedin' size='lg' />}></Nav.Item>
                <Nav.Item href='//www.instagram.com/ankith_c_kowshik/' target='_blank' icon={<Icon icon='instagram' size='lg' />}></Nav.Item>
            </Nav>
        </div>
    )
}

export default mySidebar;