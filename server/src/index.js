const Koa = require('koa')
const koaApp = new Koa()
koaApp.listen(8888, ()=> {
    console.log('服务器已开启 http://localhost:8888')
})
koaApp.use((ctx)=>{
    console.log(ctx)
    const {path} = ctx
    if(path === '/student'){
        console.log('student matched')
        const studentJson = require('./student.json')
        ctx.body = studentJson
    }
})