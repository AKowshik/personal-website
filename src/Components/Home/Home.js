import React, { Component } from 'react';
import { Icon } from 'rsuite';

import MyNavbar from '../MyNavbar/MyNavbar';
import MySidebar from '../MySidebar/MySidebar';
import MyFooter from '../MyFooter/MyFooter';
import Projects from '../Projects/Projects';
import './Home.css'

class MyHome extends Component {

    scrollPageHandler = () => {

    }

    render() {
        return (
            <div>
                <MyNavbar />
                <div className="openingPage">
                    <MySidebar />
                    <div className='mybio'>
                        <p>Ankith C Kowshik <br />Passionate software delveoper exploring the world of computer science. Documenting the process on the way.</p>
                    </div>
                </div>
                <div className="aboutMe">
                    <div className="myInfo">
                        <p>Hi! Welcome to my blog where I document my thoughts and explore the field of computer science</p>
                    </div>
                </div>
                <Projects
                    headerValue="YOLO Based License Plate Detection"
                    cardInfo="Trained a convolutional neural networks based on the YOLO algorithm to detect and extact car license plates from a video source" />
                <Projects
                    headerValue="Personal Website"
                    cardInfo="A presonal website implemented using Node JS and React deployed on an instance in AWS " />

                <MyFooter />
            </div>

        )
    }
}

export default MyHome;