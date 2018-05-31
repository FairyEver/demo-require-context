import _path from 'path'
import _replace from 'lodash.replace'

export default (publicPath, req) => req.keys().map(req).map(page => {
  const path = _replace(_path.dirname(page.default.__file), publicPath, '')
  return {
    path: `${path}${page.router.pathSuffix || ''}`,
    name: path.split('/').join('-'),
    ...page.router,
    component: page.default
  }
})
