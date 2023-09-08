import s from './Post.module.css'
import React from "react";


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.imgur.com/kFGZjly.jpg" alt=""/>
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>)

}
export default Post;