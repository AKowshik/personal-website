import React, { Component } from 'react';
import MySidebar from '../../Components/MySidebar/MySidebar';
import Projects from '../../Components/Projects/Projects';
import homeStyles from './Home.module.css'
import { Row, Col} from 'rsuite';

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
                        <p style={{ textAlign: "center" }}>Hi! Welcome to my blog.</p>
                        <p style={{ fontSize: "3vh" }}>Always a believer in learning through practice and exploration,
                         I hope to use this page as a means to document and display all that I obtain from the world of computer science. </p>
                    </div>
                </div>
                <div id="projects" className={homeStyles.projects}>
                    <p style={{ fontSize: "5vh" }}>Some of my projects</p>
                    <Row>
                        <Col xl={4} md={6} sm={12} >
                            <Projects
                                headerValue="YOLO Based License Plate Detection"
                                cardInfo="Trained a convolutional neural networks based on the YOLO algorithm to detect and extact car license plates from a video source" />
                        </Col>
                        <Col xl={4} md={6} sm={12}>
                        <Projects
                            headerValue="Personal Website"
                            cardInfo="A presonal website implemented using Node JS and React deployed on an AWS instance " />
                        </Col>

                        <Col xl={4} md={6} sm={12}>
                        <Projects
                            headerValue="Linux System Programming"
                            cardInfo="Personal implementaions of various linux utilities, demonstrations of various system calls and the usage of linux structures" />
                        </Col>
                    </Row>
                    {/* <div className={homeStyles.projectPanel}>
                        <Projects
                            headerValue="YOLO Based License Plate Detection"
                            cardInfo="Trained a convolutional neural networks based on the YOLO algorithm to detect and extact car license plates from a video source" />
                    </div>
                    <div className={homeStyles.projectPanel}>
                        <Projects
                            headerValue="Personal Website"
                            cardInfo="A presonal website implemented using Node JS and React deployed on an AWS instance " />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default MyHome;