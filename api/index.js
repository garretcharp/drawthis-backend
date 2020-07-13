const gamesRoutes = require('./games')
const avatarRoutes = require('./avatars')

const { getWordChoices } = require('../helpers')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return {
      choices: getWordChoices()
    }
  }
}].concat(gamesRoutes, avatarRoutes)
