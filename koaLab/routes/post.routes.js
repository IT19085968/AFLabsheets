const Router = require('@koa/router'),
    {createPost, getPost, getPosts, deletePost, updatePost } = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});

//following is commented in lab6
// router.get('/', ctx => {
//     ctx.body = getPosts();
//     //setting it to the body
// });

//following is added in lab6
router.get('/', async ctx => {
    ctx.body = await getPosts();
    //setting it to the body
});

//The following is commented in lab6
// router.post('/', ctx => {
//     //getting stuff out of the body
//     //we have this body as a jason as a
//     // result of the body parser
//     //post is a json object now
//     //it should be a name and description
//     //as expected by create post
//     let post = ctx.request.body;
//     //ere reassigning to return value
//     post = createPost(post);
//     //201 is marking creation of a resource
//     ctx.response.status = 201;
//     //setting response body as the post
//     ctx.body = post;
// });

//following is added in lab6
router.post('/', async ctx => {
    //getting stuff out of the body
    //we have this body as a jason as a
    // result of the body parser
    //post is a json object now
    //it should be a name and description
    //as expected by create post
    let post = ctx.request.body;
    //ere reassigning to return value
    post = await createPost(post);
    //201 is marking creation of a resource
    ctx.response.status = 201;
    //setting response body as the post
    ctx.body = post;
});

//following is commented in lab6
// router.get('/:id', ctx => {
//     const id = ctx.params.id;
//     ctx.body = getPost(id);
// });

//following 3 functions are added in lab6
router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

router.del('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await deletePost(id);
});

router.put('/:id', async ctx => {

    let post = ctx.request.body;
    let id = ctx.params.id;
    post = await updatePost(id,post);
    ctx.response.status = 201;
    ctx.body = post;
});



module.exports = router;