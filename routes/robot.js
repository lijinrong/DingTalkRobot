const router = require('koa-router')()
const RobotUtils = require('../utils/robot')

router.prefix('/robot')

router.get('/notify', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/study', function (ctx, next) {	
	RobotUtils.study()
	ctx.body = '发送成功'
})

module.exports = router
