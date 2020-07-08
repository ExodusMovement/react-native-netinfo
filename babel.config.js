module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@exodus/netinfo": "./js"
        },
        cwd: "babelrc"
      }
    ]
  ]
};
