let server ={
	host:'127.0.0.1',
	port:'8080'
}

exports.server = server;

exports.mysqlOptions={
	host:server.host,
	port:3306,
	user:'root',
	password:'',
	database:'shopping'
}