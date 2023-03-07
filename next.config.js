/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

// const path = require("path");
// module.exports = {
//   output: {
//     filename: "my-first-webpack.bundle.js",
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: "raw-loader" }],
//   },
// };
// module.exports = nextConfig;

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       // test: /\.mdx/,
//       test: /\.(png|jpg|gif|svg|pdf|ico)$/,
//       // use: [
//       //   options.defaultLoaders.babel,
//       //   {
//       //     loader: "@mdx-js/loader",
//       //     options: pluginOptions.options,
//       //   },
//       // ],
//       use: [
//         {
//           loader: "file-loader",
//           options: {
//             name: "[name].[ext]",
//             outputPath: "assets/",
//             publicPath: "/",
//           },
//         },
//       ],
//       experimental: {
//         appDir: true,
//       },
//     });

//     // const nextConfig = {
//     //   experimental: {
//     //     appDir: true,
//     //   },
//     // };

//     config.resolve.alias["@"] = path.resolve(__dirname);
//     return config;
//   },
// };
