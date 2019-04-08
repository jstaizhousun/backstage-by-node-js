//设置依赖
var mysql = require('mysql');
//配置数据库链接
var connection = mysql.createConnection({
    host: '114.55.126.7',
    user: 'root',
    password: 'q7655968',
    database: 'item',
    port: '3306'
});
//链接数据库

connection.connect();
//暴露接口
module.exports = connection;
