const Koa = require('koa')
const responseTime = require('koa-response-time')
const path = require('path')
const serve = require('koa-static')

const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

const config = require('./config')

const router = require('./routers')

const staticPath = './static'

const app = new Koa()

app.use(serve(path.join(__dirname, staticPath)))

app.use(responseTime())
app.use(logger())
app.use(bodyParser())

app.use(router.routes())

app.listen(config.server.port)

console.log("config:", config)
console.log(`server runing on port ${config.server.port}`)
