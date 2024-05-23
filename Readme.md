## Configuração e Execução

### Inicialização do Projeto
Crie um novo diretório e execute o comando abaixo para gerar um `package.json` padrão:

### Instalação do TypeScript
Instale o TypeScript como uma dependência de desenvolvimento e inicialize um arquivo de configuração:

```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
```
### Configuração do TypeScript
No arquivo tsconfig.json, ajuste as configurações conforme necessário. Por exemplo, defina outDir para ./dist para especificar o diretório de saída para os arquivos transpilados.

### Configurando as libs

```bash
npm install express
npm install @types/express --save-dev
```


### Execução do Projeto
Precisaremos usar o webpack

```bash
npm install --save-dev webpack webpack-cli ts-loader html-webpack-plugin
```

Crie o arquivo webpack.config.js na raiz do projeto:
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

```JS
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
```
No seu package.json, adicione um script que transpila o código e copia o diretório views:

```json
"scripts": {
    "build": "webpack --mode development",
    "start": "node dist/server.js"
}
```
O comando tsc transpila o código TypeScript.
O comando copyfiles -u 1 src/views/**/* dist/views copia todos os arquivos dentro de src/views para dist/views. O parâmetro -u 1 remove um nível de diretório do caminho de destino, garantindo que a estrutura de pastas esteja correta.

Transpile o código TypeScript para JavaScript usando:

```bash
npm run build
npm start
```
