const Router = require('koa-router');
const router = new Router();

const controller = require('./controllers/controller');

router.get('/', controller.doSomething1);
router.post('/', controller.doSomething2);

//handle 404
router.all('', function (req,res) {
  res.status(404).send('not found');
})

module.exports = router;