import React from 'react';
import s from './FriendsBlock.module.css';
import { useSelector } from 'react-redux';
import OneFriend from "./OneFriends/OneFriend";





const FriendsBlock = (props) =>{
    const sideBar = useSelector(state => state.sidebar.miniFriendsList);
    let friendsMas = sideBar.map(f=><OneFriend imgUrl={f.url} name={f.name}/>)

    return(<nav className={s.friendsBlock}>
        <h2>Friends</h2>
        <div className={s.friendsList}>
            {friendsMas}
        </div>
    </nav>)
}

export default FriendsBlock;
