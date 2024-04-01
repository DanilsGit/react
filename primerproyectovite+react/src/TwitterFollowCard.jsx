/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './TwitterFollowCard.css';
export function TwitterFollowCard ({children, userName, formatUserName,initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const [isClickOver, setClickOver] = useState(false);

    let text = isFollowing ? 'Siguiendo' : 'Seguir';
    if (isClickOver && isFollowing) text = 'Dejar de seguir';

    const BtnClass = isFollowing ?
    'tw-followCard-button is-following' : 'tw-followCard-button';

    const click = () => {
        setIsFollowing(!isFollowing);
    }

    const overClick = () => {
        setClickOver(!isClickOver);
    }

    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="avatar" src={`https://unavatar.io/${userName}`}/>
            <div className='tw-followCard-info'>
                <strong className='tw-followCard-strong'>{children}</strong>
                <span className='tw-followCard-span'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={BtnClass} onMouseOut={overClick} onMouseOver={overClick} onClick={click}>{text}</button>
        </aside>
    </article>
    );
}