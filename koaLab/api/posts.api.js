const UUID = require('uuid');
//following added in lab6
const {getAll, getById, removeById, save, update} =
    require('../dal/posts.dao');

//following map commented in lab6
// const posts = new Map();
//diff between arr and map
//array has a limit unlike map
//can add anything as long as it has
//the memory support

//the following is commented in lab6
// const createPost = ({name,description}) =>{
//     const post = {
//         id: UUID.v4(),
//         name,
//         description,
//         postedDate: new Date()
//     }
//     posts.set(post.id, post);
//     return post;
// }

//following added in lab6
const createPost = async ({name,description}) =>{
    const post = {
        id: UUID.v4(),
        name:name,
        description:description,
        postedDate: new Date()
    }
    // posts.set(post.id, post);
    return await save(post);
    // return post;
}

//following is commented in lab 6
// const getPosts = () => {
//     return [...posts.values()];
//     //... spread operator capable of spreading
//     // iterator which iterates like a for loop
//     //by putting ... inside []
//     // spreads values and put in array
// }

//following is added in lab6
const getPosts = async () => {
    return await getAll();
    //... spread operator capable of spreading
    // iterator which iterates like a for loop
    //by putting ... inside []
    // spreads values and put in array
}

//following is commented in lab6
// const  getPost = id => {
//     //following is commented in lab6
//     // return posts.get(id);
//
//     //following is added in lab6
//     return 0;
// }

//following is added in lab6
const  getPost = async (id) => {
    return await getById(id);

}

//the following two functions added in lab6
let deletePost = async (id) => {
    return await removeById(id);
}

let updatePost = async (id,{name,description}) =>{
    const post = {
        name:name,
        description:description,
        postedDate: new Date()
    }
    return await update(id,post);
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
};

