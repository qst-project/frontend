const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@constants': 'src/constants',
        '@pages': 'src/pages',
        '@components': 'src/components',
        '@icons': 'src/icons',
        '@redux': 'src/redux',
        '@actions': 'src/redux/actions',
        '@reducers': 'src/redux/reducers',
        '@sagas': 'src/redux/sagas',
    })(config);
    return config;
}