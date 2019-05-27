import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: []
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(() => {console.log('error in getAllUsers')})
    }

    onUsersLoaded = (users) => {
        this.setState({
            users
        })
    }

    renderProps (arr) {
        return arr.map((item) => {
            const {name, altname, photo} = item;

            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    min/>
            );
        })
    }

    render () {
        const {users} = this.state;
        const item = this.renderProps(users);

        return (
            <div className="right">
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="какой-то мужик с бородой"
                    name="man_with_beard"/>
                <div className="users__block">
                    {item}
                </div>
            </div>
        );
    }
}