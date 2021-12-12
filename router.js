const Router = require('koa-router');
const router = new Router();

const controller = require('./controllers/controller');

router.get('/', controller.doSomething1);
router.post('/', controller.doSomething2);

//handle 404
router.all('', function (ctx) {
  ctx.status(404);
  ctx.body('not found');
})

module.exports = router;