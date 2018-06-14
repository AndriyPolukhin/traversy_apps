export const entry = './src/js/app.js';
export const output = {
    path: __dirname + '/dist',
    filename: 'bundle.js'
};
export const module = {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test:/\.js$/, loader: "babel-loader", exclude: /node_modules/, query:{presets:['es2015']}}
    ]
};