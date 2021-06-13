//another library available
//helps to break our routes in a modular fashion
const Router = require('@koa/router');

//prefix is how all the routes start from
const router = new Router({
    prefix: '/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World';
});

router.post('/', ctx => {
    ctx.body = 'Hello World';
});

module.exports = router;