import React, { Component } from 'react';
import MySidebar from '../../Components/MySidebar/MySidebar';
import homeStyles from './Home.module.css'
import axios from 'axios';
import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

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
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    render() {

        const openProjectGit = (data) => {
            return (
                <div>
                   {window.open(data.link, "_blank")}
                </div>
            )
        }

        const tableHeaderStyle = {
            fontSize: "17px",
            fontWeight: "bold",
            color: "black"
        }

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
                        <p className={homeStyles.myInfoDesc}>Always a believer in learning through practice and exploration,
                         I hope to use this page as a means to document and display all that I obtain from the world of computer science. </p>
                    </div>
                </div>
                <div id="projects1" className={homeStyles.projects}>
                    <p className={homeStyles.myInfoDesc}>Some of my projects<br /><br /></p>

                    <Table
                        wordWrap
                        autoHeight
                        data={this.state.posts}
                        onRowClick={data => {
                            console.log(data);
                            openProjectGit(data);
                        }}
                    >
                        <Column flexGrow={2.5} fixed>
                            <HeaderCell style={tableHeaderStyle}>Title</HeaderCell>
                            <Cell dataKey="title" />
                        </Column>

                        <Column flexGrow={7} fixed>
                            <HeaderCell style={tableHeaderStyle}>Description</HeaderCell>
                            <Cell dataKey="description" />
                        </Column>

                        <Column flexGrow={1.5} fixed>
                            <HeaderCell style={tableHeaderStyle}>Language</HeaderCell>
                            <Cell dataKey="language" />
                        </Column>
                    </Table>
                </div>
            </div>
        )
    }
}

export default MyHome;