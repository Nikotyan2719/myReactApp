import React from 'react';
import s from './OneFriend.module.css';
import {NavLink} from "react-router-dom";


const OneFriend = (props) => {
    return (
        <div className={s.miniProfile}>
            <img src={props.imgUrl} alt=""/>
            <div>
                <span>{props.name}</span>
            </div>
        </div>)
}

export default OneFriend;