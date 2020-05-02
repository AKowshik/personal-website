import React, { Component } from 'react';
import { Icon } from 'rsuite';

import MyNavbar from '../MyNavbar/MyNavbar';
import MySidebar from '../MySidebar/MySidebar';
import AboutMe from '../AboutMe/AboutMe';
import MyFooter from '../MyFooter/MyFooter';
import Projects from '../Projects/Projects'
import './Home.css'

class MyHome extends Component {

    render() {
        return (
            <div>
                <div style={{ paddingTop: "40px", height: "100vh" }}>
                    <MyNavbar />
                    <MySidebar />
                    <div className='mybio'>
                        <h1>Ankith C Kowshik</h1>
                        <p>Passionate software delveoper exploring the world<br /> of computer science. Documenting the <br /> process on the way.</p>
                    </div>
                </div>
                <AboutMe />
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