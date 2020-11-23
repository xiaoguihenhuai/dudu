module.exports = {
    devServer :{
        proxy:{
            '/api':{
                target :'https://m.hujiang.com',
                changeOrigin:true
            },
            '/ajax':{
                target :'https://m.maoyan.com',
                changeOrigin:true
            },
        }
    }
}