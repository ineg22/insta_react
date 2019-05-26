import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://i.ytimg.com/vi/x_HL0wiK4Zc/maxresdefault.jpg"
                    alt="мужик с бородой"
                    name="man_with_beard"
                    min/>
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    accaunt name
                </div>
                <div className="post__descr">
                    description
                </div>
            </div>
        );
    }
}