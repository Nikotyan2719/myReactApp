import React from "react";
import styles from './users.module.css';


let Users = (props) => {

    if(props.users.length===0){
        props.setUsers([
            {id: 1, photoUrl: 'https://wallpapers.com/images/hd/funny-owl-pictures-cqs5b0p8uxmlxtsj.jpg',followed: true,fullName: 'Oleg1', status: 'Status 1', location:{city:'Vlg1', country: 'Russia1'}},
            {id: 2, photoUrl: 'https://wallpapers.com/images/hd/funny-owl-pictures-cqs5b0p8uxmlxtsj.jpg',followed: false,fullName: 'Oleg2', status: 'Status 2', location:{city:'Vlg2', country: 'Russia2'}},
            {id: 3, photoUrl: 'https://wallpapers.com/images/hd/funny-owl-pictures-cqs5b0p8uxmlxtsj.jpg',followed: true,fullName: 'Oleg3', status: 'Status 3', location:{city:'Vlg3', country: 'Russia3'}}])
    }


    return <div>
        {
            props.users.map(u => <div className={styles.userBlock} key={u.id}>
            <>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
            </>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}


export default Users;