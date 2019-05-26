import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://i.ytimg.com/vi/XPjn2VexgMw/maxresdefault.jpg"/>
                <Post alt="nature" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"/>
            </div>
        );
    }
}