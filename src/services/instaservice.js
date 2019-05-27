export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
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
        const posts = await this.getAllPosts();
        const users = posts.map(user => {
            const {name, altname, photo} = user;
            return  {name, altname, photo};
        });
        return users;
    }
}