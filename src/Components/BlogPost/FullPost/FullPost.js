import React, { Component } from 'react';
import axios from 'axios';
import postStyle from './FullPost.module.css'

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !==  this.props.match.params.id )){
                axios.get('http://localhost:5000/blog/' + this.props.match.params.id)
                .then(response => {
                    console.log("Reponse data in blog is ", response.data)
                    this.setState({ loadedPost: response.data });
                });
            }
        }

    }

    render() {
        
        let post = <p style={{ textAlign: 'center' }}>Please select a post</p>
        // if (this.props.match.params.id) {
        //     post = <p style={{ textAlign: 'center' }}>Loading</p>
        // }
        if (this.state.loadedPost) {
            post = (
                <div>
                    <h1>
                        {this.state.loadedPost[0][1]}
                        The post id is {this.props.match.params.id}
                    </h1>
                    <p>
                        {this.state.loadedPost[0][2]}
                    </p>
                </div>
            )
        }

        return (
            post
        )
    }
}

export default FullPost;