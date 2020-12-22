const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
      useBuiltIns: "usage",
      corejs: {
        version: 3,
        proposals: true
      }
    }
  ]
];
module.exports = {
  presets,
  plugins: [["@babel/plugin-proposal-class-properties"], ["lodash"]]
};
