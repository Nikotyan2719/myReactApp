import s from './MyPosts.module.css'
import React from "react";
import Post from "./Post/Post";
import {prettyFormat} from "@testing-library/react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePage-reducer";




const MyPosts = (props) => {

    let postsElements = props.posts.map(p=><Post message={p.message} likes={p.likesCount} key={p.id}/>)//метод мап для создания нового массива из элементов по типу - <Post message={"hey"} likes={2}

    let newPostElement = React.createRef();//создаем ссылку на текст арию, чтобы считать из неё значение


    let onAddPost =()=>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;//берет нынешнее значение текст арии
        props.updateNewPostText(text);
        //вызывает функцию из стейта и передает полученный текст
    }

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} //когда набираем букву, вызывается функция оброботчик событмй/берет начальное значение из стейта\вызывает функцию для созданинового поста
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>)
}
export default MyPosts;