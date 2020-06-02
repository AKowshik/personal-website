import React, { Component } from 'react';
import axios from 'axios';
import postStyle from './FullPost.module.css'
import image from '../../Assets/mybg.jpg'
import { Markup } from 'interweave';
import { Divider } from 'semantic-ui-react'

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get('http://localhost:5000/blog/' + this.props.match.params.id)
                    .then(response => {
                        console.log("Reponse data in blog is ", response.data)
                        this.setState({ loadedPost: response.data });
                        console.log(response.data);
                    });
            }
        }

    }

    render() {

        let post = <p style={{ textAlign: 'center' }}>Loading post. Pease wait....</p>
        // if (this.props.match.params.id) {
        //     post = <p style={{ textAlign: 'center' }}>Loading</p>
        // }
        if (this.state.loadedPost) {
            post = (
                <div>
                    <div style={{backgroundImage: `url(${this.state.loadedPost[0].image})`, paddingBottom: "80px"}}>
                        <div className={postStyle.postTitle}>
                            {this.state.loadedPost[0].title}
                        </div>
                    </div>
                    
                    <div className={postStyle.postBody}>
                        {this.state.loadedPost[0].published_on}
                         <Divider/>
                        <Markup content={this.state.loadedPost[0].body} />
                    </div>
                </div>
            )
        }

        return (
            post
        )
    }
}

export default FullPost;