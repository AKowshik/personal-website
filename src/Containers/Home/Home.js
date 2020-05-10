import React, { Component } from 'react';
import MySidebar from '../../Components/MySidebar/MySidebar';
import Projects from '../../Components/Projects/Projects';
import homeStyles from './Home.module.css'

class MyHome extends Component {

    render() {
        return (
            <div>
                <div className={homeStyles.openingPage}>
                    <div className={homeStyles.mySidebar}>
                        <MySidebar />
                    </div>
                    <div className={homeStyles.mybio}>
                        <p>Ankith C Kowshik <br />Passionate software delveoper exploring the world of computer science. Documenting the process on the way.</p>
                    </div>
                </div>
                <div className={homeStyles.aboutMe}>
                    <div className={homeStyles.myInfo}>
                        <p>Hi! Welcome to my blog where I document my thoughts and explore the field of computer science</p>
                    </div>
                </div>
                <div className={homeStyles.projects}>
                    <div>
                        <Projects
                            headerValue="YOLO Based License Plate Detection"
                            cardInfo="Trained a convolutional neural networks based on the YOLO algorithm to detect and extact car license plates from a video source" />
                    </div>
                    <div>
                        <Projects
                            headerValue="Personal Website"
                            cardInfo="A presonal website implemented using Node JS and React deployed on an AWS instance " />
                    </div>

                </div>
            </div>
        )
    }
}

export default MyHome;