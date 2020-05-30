import React, { Component } from 'react';
import MySidebar from '../../Components/MySidebar/MySidebar';
import homeStyles from './Home.module.css'
import axios from 'axios';
import { Table } from 'semantic-ui-react';

class MyHome extends Component {

    state = {
        posts: [],
        loadedProjects: null
    }

    componentDidMount() {
        if (!this.state.loadedPost) {
            axios.get('http://localhost:5000/')
                .then(response => {
                    const posts = response.data;
                    this.setState({ posts: posts });
                    this.setState({ loadedPost: response.data });
                    console.log("Axios called")
                })
                .catch(error => {
                    console.log(error);
                })
        }


    }

    render() {

        //Fix issue with multiple udpates of state on scroll to table
        // console.log("State is ", this.state.posts);
        const posts = this.state.posts.map(post => {
            return (
                <Table basic='very' key={post[0]} fixed>
                    <Table.Body>
                        <Table.Row verticalAlign='top'>
                            <Table.Cell width={2} textAlign="left">{post[1]}</Table.Cell>
                            <Table.Cell width={6} textAlign="left">{post[2]}</Table.Cell>
                            <Table.Cell width={1} textAlign="left">{post[3]}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            );
        });

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
                    <p style={{ fontSize: "3vh" }}>Some of my projects<br/><br/></p>
                    <Table basic='very'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2} textAlign='center'>Title</Table.HeaderCell>
                                <Table.HeaderCell width={6} textAlign='center'>Description</Table.HeaderCell>
                                <Table.HeaderCell width={1} textAlign='center'>Language</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                    {posts}
                </div>
            </div>
        )
    }
}

export default MyHome;