var webpack          = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config           = require('./webpack.config.js');
var path             = require('path');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    progress: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true }
}).listen(3003, '0.0.0.0', function(err) {
    if(err) return console.log(err);
})