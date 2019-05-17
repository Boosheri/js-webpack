const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin");

// Entry Points
// https://webpack.js.org/concepts/entry-points/

// Output
// https://webpack.js.org/concepts/output

// Loaders
// https://webpack.js.org/concepts/loaders

// Plugins
// https://webpack.js.org/concepts/plugins

module.exports = {
	mode: "development",
	// You can specify a path to an "entry" file in multiple ways.
	// An "entry" is the file where webpack begins
	// bundling all of yours modules.

	// For a single entry, the default entry that webpack looks for is 
	// "./src/index.js"

	// to customize this, write:
	// entry: "./src/client.js"

	// For multiple entry files bundle into a single file, use an array:
	// entry: ["./src/client.js", "./src/defaults.js"]
	// To create multiple bundles from separate entry files, use an object:
	entry: {
    // Creates a bundle "./dist/client.js" (named after the key)
    client: "./src/client.js",
    // Creates a bundle "./dist/defaults.js" (named after the key)
    defaults: "./src/defaults.js",
    server: "./src/defaults.js"
  },
  output: {
    // The "path" property is used to specify the location where
    // our bundled files are created. By default, it is
    // path.join(__dirname, "build")
		path: path.join(__dirname, "build"),
    // The "filename" property to change the names of the
    // bundled files.
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // Use "exclude" with a regular express to
        // files that should be ignored by this loader.
        // Notably, we should always ignore node_modules/.
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif|webp|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "images/"
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo", // <title> of the web page
      chunks: ["client"]
      // "chunks" tells webpack which bundles to include
      // in the html file.
    })
  ]
};
