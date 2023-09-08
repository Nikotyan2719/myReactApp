import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () =>{
    return(
        <div>
            <div className={s.upImgBlock}>
                <img src="https://w.forfun.com/fetch/91/91ab23cdc35b6b44d15f1f5ebeb1cfdf.jpeg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src="https://wallpapers.com/images/hd/funny-animal-picture-vnv8fv6wf6hazyap.jpg" alt=""/>
                <div>
                    <h3>Popkov Nikita</h3>
                    <p>Изучаю реакт)</p>
                </div>

            </div>

        </div>)
}

export default ProfileInfo;