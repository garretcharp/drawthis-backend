const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')

const wordFile = readFileSync(join(__dirname, '/words.json'), { encoding: 'utf8' })
const words = JSON.parse(wordFile)

module.exports = { words, config }
