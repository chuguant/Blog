var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
},
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};

// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         },
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         }
//       ]
//     }
// }
  
  