import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderProps (arr) {
        return arr.map((item) => {
            const {name, altname, photo, id} = item;

            return (
                <User
                    src={photo}
                    alt={altname}
                    name={name}
                    key={id}
                    min/>
            );
        })
    }

    render () {
        const {users, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
        const items = this.renderProps(users);

        return (
            <div className="right">
                <User 
                    src="https://img1.grunge.com/img/gallery/10-scientific-effects-that-happen-when-a-man-grows-a-beard/intro-1542050589.jpg"
                    alt="какой-то мужик с бородой"
                    name="man_with_beard"/>
                <div className="users__block">
                    {items}
                </div>
            </div>
        );
    }
}