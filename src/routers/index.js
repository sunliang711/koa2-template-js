const Router = require('koa-router')
const health = require('./health')

// full  path: [optional prefix] + 1st parameter of router.use + 1st parameter of router.get|post
const router = new Router({ prefix: '/api/v1' })

router.use(health.routes())
// router.use(TODO.routes())


// debug, print all routes
// console.log("router:", router)

module.exports = router
