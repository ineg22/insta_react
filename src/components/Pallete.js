import React, {Component} from 'react';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Pallete extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false
    }

    componentDidMount() {
        this.updatePallete();
    }

    updatePallete() {
        this.InstaService.getAllPhotos()
        .then(this.onPalleteLoaded)
        .catch(this.onError);
    }

    onPalleteLoaded = (photos) => {
        this.setState({
            photos,      // === photos: photos,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {src, alt, id} = item;
            
            return (
                <img src={src} alt={alt} key={id}></img>
            );
        })
    }

    render() {
        const {photos, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(photos);

        return (
            <div className="pallete">
                {items}
            </div>
        );
    }

}