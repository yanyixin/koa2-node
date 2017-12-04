// 按照官方示例
const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')

const app = new Koa()
const router = require('./router')

app.use(nunjucks({
  ext: 'html',
  path: path.join(__dirname, 'views'),
  nunjucksConfig: {
    trimBlocks: true // 开启转义 防Xss
  }
}))

app.use(bodyParser());
router(app);

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})