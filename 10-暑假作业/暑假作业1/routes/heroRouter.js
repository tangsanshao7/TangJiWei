//引入express框架
const express = require('express');

//创建路由
const heroRouter = express.Router();

//引入控制器方法
const { indexPage , addPage , createHero , delHero , searchHero , editPage , editHero } = require('../controllers/heroCtrl');

//创建具体路由
heroRouter.get('/',indexPage);

heroRouter.get('/add',addPage);

heroRouter.post('/add',createHero);

heroRouter.delete('/del/:id',delHero);

heroRouter.get('/search', searchHero);

heroRouter.get('/edit/:id',editPage);

heroRouter.put('/edit',editHero);

//导出路由
module.exports = heroRouter;