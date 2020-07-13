const { readFileSync } = require('fs')
const { join } = require('path')

const config = require('./config')

const wordFile = readFileSync(join(__dirname, '/words.json'), { encoding: 'utf8' })
const words = JSON.parse(wordFile)

const wordsArray = Object.keys(words)

const getRandomElement = (list) =>
  list[Math.floor((Math.random() * list.length))]

const getWordChoices = (amount = 3) => {
  const list = []

  for (let i = 0; i < amount; i++) {
    const filteredArray = wordsArray.filter(word => list.includes(word) === false)
    list.push(getRandomElement(filteredArray))
  }

  return list.map(word => ({ ...words[word], word }))
}

module.exports = { words, wordsArray, getWordChoices, config }
