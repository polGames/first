var path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development', //use 'production' for actual production. 'development' has faster compiling for rapid testing

    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        //presets: ['@babel/preset-env']
                        //* at first i was just using the line above, but for whatever reason async/await was unusable and gave errors, so i googled why and found the snippet below and, i dont know what it means really, but async/await now works so thats great
                        presets: [
                            [
                                "@babel/preset-env", {
                                    "targets": {
                                        "node": "current"
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};