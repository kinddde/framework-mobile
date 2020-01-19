// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");
const argv = require("yargs-parser")(process.argv.slice(2));

let plugins = [
  // new BundleAnalyzerPlugin(),
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV === "development",
    "process.env.API": JSON.stringify(argv["API"] || "production")
  })
];

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {}
      }
    }
  },

  configureWebpack: {
    plugins: plugins
  },

  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
  },

  devServer: {
    port: 8080, // 端口号
    https: false, // https:{type:Boolean}
    open: true
  },

  productionSourceMap: false
};
