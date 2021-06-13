const Koa = require('koa'), bodyParser = require('koa-bodyparser');

const HomeRouter = require('./routes/home.routes');
const PostRouter = require('./routes/post.routes');

//Koa application created
const app = new Koa();
//content-type = application/json

//registering bodyparser
//middleware
//before registered routes or after registered routes

app.use(bodyParser());

app.use(HomeRouter.routes()).use(HomeRouter.allowedMethods());

app.use(PostRouter.routes()).use(PostRouter.allowedMethods());

app.use(ctx=>{
    ctx.body = 'Hello';
});

app.listen(3000, err=>{
    if (err){
        console.log(err);
        return;
    }

    console.log('Application is running on port 3000');
});