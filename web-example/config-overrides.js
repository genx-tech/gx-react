const path = require('path');

const { override, babelInclude, fixBabelImports } = require('customize-cra');

module.exports = override(
    babelInclude([
        path.resolve('src'),
        path.resolve('../node_modules/galio-framework/src'),
        path.resolve('../node_modules/react-native-vector-icons/lib'),
    ]),

    fixBabelImports('antd', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),

    fixBabelImports('@genx/react', {
        libraryName: '@genx/react',
        prefixMatch: true, // match '@genx/react/i18n' to '@genx/react/lib/commonjs/i18n'
        libraryDirectory: 'lib/commonjs',
        camel2DashComponentName: false,
        memberUseNamedImport: true,
    }),

    fixBabelImports('lodash', {
        libraryDirectory: '',
        camel2DashComponentName: false,
    })
);
