module.exports = {
  entry: "./react_components/hello.js",
  output: {
    path: "./public/js/",
    filename: "bundle.js"
  },

  externals: {
    "react": "React"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
};
