import React from 'react'
import postStyle from './PostHeader.module.css'

const myBlogPost = (props) => (
        <div>
            <article className={postStyle.post} onClick={props.clicked}>
                <h1>{props.title}</h1>
                <p>{props.date} </p>
            </article>
        </div>
)

export default myBlogPost;