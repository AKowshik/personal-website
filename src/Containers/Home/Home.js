import React, { Component } from 'react';
import MySidebar from '../../Components/MySidebar/MySidebar';
import Projects from '../../Components/Projects/Projects';
import homeStyles from './Home.module.css'
// import { Table } from 'rsuite';
import axios from 'axios';
import { Table } from 'semantic-ui-react';

class MyHome extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5000/')
            .then(response => {
                const posts = response.data; 
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.log(error);
            })
            
    }

    render() {

        //Fix issue with multiple udpates of state on scroll to table
        console.log("State is ", this.state.posts);
        const posts = this.state.posts.map(post => {
            return (
                <Table basic='very' key={post[0]} >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Language</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>{post[1]}</Table.Cell>
                                <Table.Cell>{post[2]}</Table.Cell>
                                <Table.Cell>{post[3]}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
            );
        });

        const { Column, HeaderCell, Cell } = Table;

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
                    <p style={{ fontSize: "3vh" }}>Some of my projects</p>
                    {/* <Table
                        wordWrap
                        height={800}
                        autoHeight
                        data={this.state.posts}
                        onRowClick={data => {
                            console.log(data);
                        }}
                    >
                        <Column>
                            <HeaderCell align="center">Title</HeaderCell>
                            <Cell dataKey="title" />
                        </Column>

                        <Column>
                            <HeaderCell align="center">Description</HeaderCell>
                            <Cell dataKey="description" />
                        </Column>

                        <Column>
                            <HeaderCell align="center">Language</HeaderCell>
                             <Cell dataKey="language" /> 
                        </Column>
                    </Table> */}
                    {posts}
                    

                </div>
            </div>
        )
    }
}

export default MyHome;