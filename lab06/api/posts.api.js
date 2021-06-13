const UUID = require('uuid');

const posts = new Map();

const createPost = ({name,description}) =>{
    const post = {
        id: UUID.v4(),
        name,
        description,
        postedDate: new Date()
    }
    posts.set(post.id, post);
    return post;
}

//... is spread operator
const getPosts = () => {
    return [...posts.values()];
}

const  getPost = id => {
    return posts.get(id);
}

module.exports = {
    createPost,
    getPost,
    getPosts
};


