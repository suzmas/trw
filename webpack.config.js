module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  // Enable sourcemaps for debugging webpack's outpout
  devtool: "source-map",

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by awesome-typescript-loader
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },

  // When importing a module whose path matches one of the following, just assume a corresponding global var exists and use that instead. This is important because it allows us to avoid bundling all of our dependencies, which allows browsers to cache those libraries between builds
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};
