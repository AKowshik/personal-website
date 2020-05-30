import React from 'react'
import postStyle from './PostHeader.module.css'
import { Item } from 'semantic-ui-react'
import { Avatar } from 'rsuite'

const myBlogPost = (props) => (

    <div className={postStyle.post} onClick={props.clicked}>
        <Item.Group divided>
            <Item>
                <Item.Content >
                    <Avatar
                        style={{ float: "left", marginRight: "20px"}}
                        circle
                        size='lg'
                        src={props.image}
                    />
                    <Item.Header style={{ marginTop: "10px"}}>{props.title}</Item.Header>
                    <Item.Meta >{props.date}</Item.Meta>
                </Item.Content>
            </Item>
        </Item.Group>
    </div>
)

export default myBlogPost;