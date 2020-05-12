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
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
                .then(response => {
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
                        Some text or paragraph goes here
                        The post id is {this.props.match.params.id}
                    </h1>
                </div>
            )
        }

        return (
            post
        )
    }
}

export default FullPost;