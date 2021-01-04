const {
    override,
    addBabelPlugin,    
    fixBabelImports,
    addWebpackResolve,
} = require('customize-cra');

module.exports = override(
    addWebpackResolve({
        modules: ['src', 'node_modules', '../node_modules'],
    }),

    addBabelPlugin('@babel/plugin-syntax-dynamic-import'),

    fixBabelImports('lodash', {
        libraryDirectory: '',
        camel2DashComponentName: false,
    })
);
