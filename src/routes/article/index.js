module.exports = {
  path: 'article',
  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('app/article'))
    })
  },
  getIndexRoute(location, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('app/article/list')
      })
    })
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./add')
      ])
    })
  }
}
