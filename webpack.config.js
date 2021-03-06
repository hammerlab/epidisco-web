var path = require("path");
var webpack = require('webpack');

var epiPath = path.resolve(__dirname, "epidiscoweb/js/");
var resolveEpiPath = function(subdir) {
  return path.resolve(epiPath, subdir);
};

module.exports = {
  entry: resolveEpiPath("main.jsx"),
  output: {
    path: "epidiscoweb/static/js/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      "epi": epiPath,
      "epiwf": resolveEpiPath("components/workflow/")
    },
    extensions: ["", ".js", ".jsx", ".scss"]
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loader: "style-loader!css-loader",
        exclude: /flexboxgrid/
      },
      {
        test: /(\.css|\.scss)$/,
        loader: "style!css?modules",
        include: /flexboxgrid/,
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /bootstrap-sass\/assets\/javascripts\//,
        loader: "imports?jQuery=jquery"
      }

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
