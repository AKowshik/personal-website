import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from '../../Components/BlogPost/PostHeader/PostHeader';
import FullPost from '../../Components/BlogPost/FullPost/FullPost';

class Blog extends Component {

    state = {
        posts: [],
    }


    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( response => {
                const posts = response.data.slice(0,4); // Temporary solution. Not necessary when backend is implemented
                this.setState({posts: posts});
            });
    }

    render() {

        const posts = this.state.posts.map(post => {
            return <BlogPost 
                    key={post.id} 
                    title={post.title}
                    id={post.id}
                    /> 
        });

        return (
            <div style={{paddingBottom: "150px"}}>
                <section>
                {posts}
                </section>
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section> */}
            </div>
        )
    }
}

export default Blog;