const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

router.get(
  '/users/:id',
  async (ctx, next) => {
    ctx.response.body = '<h1>访问到了</h1>'
    ctx.user = {id: 3}
    await next();
  },
  async (ctx) => {
    console.log(ctx.user);
    // 在这个中间件中再对用户信息做一些处理
    // => { id: 17, name: "Alex" }
  }
);

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})