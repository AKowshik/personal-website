import React, { Component } from 'react';
import axios from 'axios';
import BlogPost from '../../Components/BlogPost/PostHeader/PostHeader';
import { Link } from 'react-router-dom'


class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null
    }


    componentDidMount() {
        axios.get('http://localhost:5000/blog')
            .then(response => {
                const posts = response.data;
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
        console.log("State is ", this.state.posts);
        const posts = this.state.posts.map(post => {
            return (
                <Link to={"/blog/" + post.id}
                    key={post.id}>
                        
                    <BlogPost
                        title={post.title}
                        date={post.published_on}
                        image={post.image}
                        />
                </Link>                  
            );
        });

        return (
                    <div style={{ paddingBottom: "150px" }}>
                        <section>
                            {posts}
                        </section>
                    </div>
        )
    }
}

export default Blog;