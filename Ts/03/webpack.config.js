const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// 配置信息
module.exports = {
    // 入口文件,
    entry: "./src/03.ts",
    //指定打包文件所在目录
    output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件名
        filename:"bundle.js"
    },
    //指定vebpack打包时要使用模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node-modules/
            }
        ]
    },
    //配置Vebpack插件
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ]

}