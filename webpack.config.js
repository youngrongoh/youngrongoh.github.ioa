const path = require('path');
const fs = require('fs');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TITLE = 'my blog';

const makeHTMLRouter = () => {
  const pages = getPagesName();
  const plugins = pages.map((page) => new HtmlWebpackPlugin({
      title: TITLE,
      filename: [page, 'index.html'].join('/'),
      template: ['src', 'pages', page, 'index.html'].join('/'),
      chunks: ['./index.js']
    }));
  return plugins;
}

const makePublicHTML = () => {
  const dir = fs.readdirSync(path.resolve(__dirname, 'public'));
  const htmls = dir
    .filter((filename) => (filename.length - filename.indexOf('.html')) === 5)
    .map((filename) => new HtmlWebpackPlugin({
      title: TITLE,
      filename,
      template: 'public/' + filename,
      chunks: filename === 'index.html' ? ['main'] : [],
    }));

  return htmls;
}

const getPagesName = () => {
  const pagesPath = path.resolve(__dirname, 'src', 'pages');
  const pages = fs.readdirSync(pagesPath);
  return pages;
}

module.exports = {
  mode: 'development',
  entry: {
    main:'./src/index.js',
    ...getPagesName().reduce((pages, page) => {
      pages[page] = `./src/pages/${page}/index.js`;
      return pages;
    }, {}),
  },
  output: {
    filename: (pathData) => pathData.chunk.name === 'main' ? '[name].js' : '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "markdown-loader",
            options: {
              // Pass options to marked
              // See https://marked.js.org/using_advanced#options
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...makePublicHTML(),
    ...makeHTMLRouter(),
    // new CleanTerminalPlugin(),
  ],
  devServer: {
    devMiddleware: { publicPath: "/dist/" },
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      },
      {
        directory: path.join(__dirname, 'public'),
        watch: true,
      }
    ],
    compress: true,
    port: 9000,
    hot: true,
    client: {
      overlay: true,
    },
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/404.html' },
      ]
    },
  },
  devtool: "inline-source-map",
  watch: true,
};