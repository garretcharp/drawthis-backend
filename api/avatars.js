const Wreck = require('@hapi/wreck')

const avatarList = {
  proxy: {
    uri: 'https://api.adorable.io/avatars/list',
    onResponse: async (_err, res, _request, h, _settings, _ttl) => {
      if (res.statusCode !== 200) throw new Error('Bad Response')
      const payload = await Wreck.read(res, { json: true })
      return { ...payload, format: '/avatars/{eyes}/{nose}/{mouth}/{color}' }
    }
  }
}

const avatarImage = {
  proxy: {
    uri: 'https://api.adorable.io/avatars/face/{eyes}/{nose}/{mouth}/{color}',
    onResponse: async (_err, res, _request, h, _settings, _ttl) => {
      if (res.statusCode !== 200) throw new Error('Bad Response')
      const payload = await Wreck.read(res)
      return payload
    }
  }
}

const routes = [{
  method: 'GET',
  path: '/avatars/list',
  handler: avatarList
}, {
  method: 'GET',
  path: '/avatars/{eyes}/{nose}/{mouth}/{color}',
  handler: avatarImage
}]

module.exports = routes
