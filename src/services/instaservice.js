export default class InstaService {
    constructor() {
        this._apiBase = 'https://my-json-server.typicode.com/ineg22/db/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`could not fetch ${url}, received ${res.status}`)
        }

        return res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts/');
        return res;
    }

    getAllUsers = async() => {
        const res = await this.getResource('posts/');
        const users = res.map(user => {
            const {name, altname, photo, id} = user;
            return  {
                name, 
                altname, 
                photo,
                id
            };
        });
        return users;
    }

    // getAllPhotos === getAllUsers
    // shorter method
    getAllPhotos = async() => {
        const res = await this.getResource('posts/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        };
    }
}