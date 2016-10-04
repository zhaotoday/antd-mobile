/**
 * 路由跳转
 */
const go = function (route) {
  this.context.router.push(route)
}

export default {
  go
}
