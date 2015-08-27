var glob = require('glob')
GLOBAL.__webpack_public_path__ = ''

var config = require('../conf/webpack.config.js')
var assign = require('object-assign')


var options = assign({
    recursive: true,
    target: 'node',
    originalRequire: require
}, config)

// console.log(options)

var eRequire = require('enhanced-require')
var wpRequire = eRequire(module, options)

wpRequire('babel/register')

glob.sync(__dirname + '/../src/**/__tests__/*.js').forEach(function(file) {
    wpRequire(file)
})

