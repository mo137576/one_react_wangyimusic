let express=require('express');
let app=express();
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.listen(3000);
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");//允许8080访问
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");//允许的头
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials','true')
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

let User=require('./model');
//MD5加密
let crypto=require('crypto');
let md5=(val)=>{
    return crypto.createHash('md5').update(val).digest('hex');
};
//注册
app.post('/logon/index',function (req,res) {
    //加密密码
    req.body.password=md5(req.body.password);
    User.findOne({username:req.body.username}).then(doc=>{
        if(doc){
            res.json({err:'用户名已存在'})
        }else{
            User.create(req.body).then(doc=>{
                req.session.user=doc;
                res.json(req.session.user);
            })
        }
    })
})