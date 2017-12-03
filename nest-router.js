const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const Router = require('koa-router')
const app = new Koa()

const forums = new Router();
const posts = new Router();

posts.get('/', async (ctx, next) => {
  ctx.response.body = '<h1>hello</h1>'
})

posts.get('/:pid', async (ctx, next) => {
  ctx.response.body = '<h1>word</h1>'
})

forums.use('forums/:fid/posts', posts.routes(), posts.allowedMethods())

app.use(forums.routes())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})