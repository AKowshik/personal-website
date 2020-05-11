import React, { Component } from 'react';
import postStyle from './FullPost.module.css'

class FullPost extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("In full posts")
        return (
            <div>
                <h1>
                    Some text or paragraph goes here
                The post id is {this.props.id}
                </h1>
            </div>
        )
    }
}

export default FullPost;