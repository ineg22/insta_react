import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                alt="мужик с бородой"
                name="man_with_beard"/>
            <div className="users__block">
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="мужик с бородой"
                    name="man_with_beard"
                    min/>
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="мужик с бородой"
                    name="man_with_beard"
                    min/>
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="мужик с бородой"
                    name="man_with_beard"
                    min/>
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="мужик с бородой"
                    name="man_with_beard"
                    min/>
            </div>
        </div>
    );
}