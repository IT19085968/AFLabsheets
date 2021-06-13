const Koa = require('koa'),
    bodyParser = require('koa-bodyparser');

//added in lab6
serve = require('koa-static');

const HomeRouter = require('./routes/home.router');
const PostRouter = require('./routes/post.routes');

//following is added in lab6
require('./dal');

//Creating koa application
const app = new Koa();

//Content-type = application/json

//registering the body parser
//the one who gets the data stream in the body
//from the request and convert it to whatever
//applicable and make it available to you
//eg: we're going to deal with json in the body
//bodyparser will understand it by looking at
//content type header(type of data in the body is determined)

app.use(bodyParser()); //these are called middleware
//because they're put here using use method
//they could act at any time
//bodyparser check home router and post router
//one by one

//these are registered routes
//along with the allowed methods
app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods());

app.use(PostRouter.routes())
    .use(PostRouter.allowedMethods());

//following added in lab6
app.use(serve('public/'));

//if we type /about in browser this is what we get
//reason: body parser's default route is this
//when others don't match
app.use(ctx => {
    ctx.body = 'Hello';
});

//making our app available via port 3000
app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

