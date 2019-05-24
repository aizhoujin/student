module.exports = {
    // eslint-loader 警告
    lintOnSave: false,

    // css 相关选项
    css: {
        /*为预处理器 loader 传递自定义选项*/
        loaderOptions: {
            sass: {
                data: `@import "@/style/color.scss";`
            }
        }
    },

    // 部署应用包基本url
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : './',

    // 配置 webpack-dev-serve 行为
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        // proxy: {
        //     '/wechat': {
        //         target: 'http://api.xiaoxunbang.com/wechat',
        //         pathRewrite: {'^/wechat': ''}
        //     }
        // }
    },
}
