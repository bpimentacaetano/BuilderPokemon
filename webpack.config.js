const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/main.ts', // ponto de entrada do seu TypeScript do lado do cliente
    output: {
        filename: 'bundle.js', // o arquivo de saída que será criado
        path: path.resolve(__dirname, 'dist'), // diretório de saída
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // resolve essas extensões
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.html', // seu arquivo HTML como template
            inject: 'body', // injeta o script no body do HTML
        })
    ],
    mode: 'development' // modo de desenvolvimento
};