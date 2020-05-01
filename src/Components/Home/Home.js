import React, { Component } from 'react';
import { Icon } from 'rsuite';

import MyNavbar from '../MyNavbar/MyNavbar';
import MySidebar from  '../MySidebar/MySidebar';
import './Home.css'

class MyHome extends Component {

    render() {
        return (
            <div>
                <MyNavbar />
                <MySidebar />
                 { this.bio() }
            </div>
        )
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
}

export default MyHome;