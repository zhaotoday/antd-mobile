import auth from 'utils/auth'

module.exports = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('app'),
    getIndexRoute(location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('app/dashboard')
        })
      })
    },
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./article'),
          require('./help'),
          require('./need'),
          require('./setup')
        ])
      })
    }
  }, {
    path: 'login',
    component: require('app/login'),
    onEnter(nextState, replace) {
      if (auth.isLogin()) {
        replace('/')
      }
    }
  }, {
    path: 'register',
    component: require('app/register')
  }]
}
