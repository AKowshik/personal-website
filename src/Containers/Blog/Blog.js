import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from '../../Components/BlogPost/PostHeader/PostHeader';
import { Link } from 'react-router-dom'
import FullPost from '../../Components/BlogPost/FullPost/FullPost';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4); // Temporary solution. Not necessary when backend is implemented
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.log(error);
            })
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {

        const posts = this.state.posts.map(post => {
            return (
                <Link to={"/" + post.id} 
                    key={post.id}>
                    <BlogPost
                        title={post.title}
                        clicked={() => this.postSelectedHandler(post.id)} />
                </Link>
            );
        });

        return (
            <div style={{ paddingBottom: "150px" }}>
                <section>
                    {posts}
                </section>
                {/* <FullPost id={this.state.selectedPostId} /> */}
            </div>
        )
    }
}

export default Blog;