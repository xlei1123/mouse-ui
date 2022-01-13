export default {
  esm: 'rollup',
  cjs: 'rollup',
  cssModules: {
    generateScopedName: function (name: any, filename: any, css: any) {
      return name;
    },
  },
};
