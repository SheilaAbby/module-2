'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GITHUB_USER: '"SheilaAbby"',
  GITHUB_PASS: '"sheeshbeib195"'
})
