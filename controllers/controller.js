const model = require('../models/model');

exports.doSomething1 = async (ctx) => {
  try {
    const data = await model.getData();
    ctx.status = 200 ;
    ctx.body = data;
  } catch (e) {
    console.log('e', e);
    ctx.status = 500;
  }
};

exports.doSomething2 = (ctx) => {
  try {
    console.log(ctx.request.body)
    model.postData(ctx.request.body.data);
    ctx.status = 201;

  } catch (e) {
    console.log('e', e);
    ctx.status = 500;
  }
};