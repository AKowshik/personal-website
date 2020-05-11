import React from 'react'
import postStyle from './PostHeader.module.css'
import { Switch, Link, Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

const myBlogPost = (props) => {
    return (
        <div>
            <article className={postStyle.post} onClick={props.clicked}>
                <h1>{props.title}</h1>
                <p> Some text goes here </p>
            </article>

            <Switch>
                <Route exact path={"/blog-post" + props.id}>
                    <FullPost />
                </Route>
            </Switch>
        </div>
    )
}

export default myBlogPost