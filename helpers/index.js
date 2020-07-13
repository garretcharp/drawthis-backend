const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')

const wordFile = readFileSync(join(__dirname, '/words.json'), { encoding: 'utf8' })
const words = JSON.parse(wordFile)

const wordsArray = Object.keys(words)

const getRandomElement = (list) =>
  list[Math.floor((Math.random() * list.length))]

const getWordChoices = () => {
  const first = getRandomElement(wordsArray)
  const filteredArray = wordsArray.filter(word => word !== first)
  const second = getRandomElement(filteredArray)

  return [{ ...words[first], word: first }, { ...words[second], word: second }]
}

module.exports = { words, wordsArray, getWordChoices, config }
