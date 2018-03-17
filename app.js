global.__basename=__dirname;

const express = require('express');

const ejs = require('ejs');

const app = express();

const routes = require(__basename+'/routes/routes.js');

//设置静态资源路径
app.use(express.static(__basename+'/web/public'));
app.use(express.static(__basename+'/web/views'));
app.use(express.static(__basename+'/web'));

// 设置视图引擎
app.set('views',__basename+'/web/views');
app.set('view engine','html');
app.engine('.html',ejs.__express);

// 加载所有路由
routes(app);


//404(页面不存在)处理
app.use(function(req,res){
	res.status(404);
	res.send('页面不存在');
});

//500(服务器错误)处理
app.use(function(err,req,res){
	res.status(500);
	res.send('服务器错误');
});

app.listen(8080,function(){
	console.log('服务器运行于127.0.0.1:8080端口');
});
