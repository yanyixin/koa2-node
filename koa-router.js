// const Koa = require('koa');
// const app = new Koa();

// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/') {
//         ctx.response.body = '<h1>index page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/home') {
//         ctx.response.body = '<h1>home page</h1>';
//     } else {
//         await next();
//     }
// });
// app.use(async (ctx, next) => {
//     if (ctx.request.path === '/404') {
//         ctx.response.body = '<h1>404 Not Found</h1>';
//     } else {
//         await next();
//     }
// });

// app.listen(3000, ()=>{
//   console.log('server is running at http://localhost:3000')
// })

const Koa = require('koa')
// 注意 require('koa-router') 返回的是函数:
const router = require('koa-router')()
const app = new Koa()

// 添加路由
router.get('user', 'users/:id', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

const userUrl = router.url('user', '3')
console.log('userUrl--',userUrl)

const userUrl2 = router.url('user', {id: 4})
console.log('userUrl2--',userUrl2)

// router.get('/home', async (ctx, next) => {
//     ctx.response.body = '<h1>HOME page</h1>'
// })

// router.get('/404', async (ctx, next) => {
//     ctx.response.body = '<h1>404 Not Found</h1>'
// })

// router.get('/name', async (ctx, next) => {
//   ctx.response.body = '<p>小怪兽</p>'
// })

 // 调用路由中间件
 app.use(router.routes())

app.listen(3000, ()=>{
  console.log('server is running at http://localhost:3000')
})