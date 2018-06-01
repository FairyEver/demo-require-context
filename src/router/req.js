import _path from 'path'
import _get from 'lodash.get'
import _replace from 'lodash.replace'

export default (publicPath, req) => req.keys().map(req).map(page => {
  const path = _replace(_path.dirname(page.default.__file), publicPath, '')
  return {
    path: `${path}${_get(page, 'router.pathSuffix', '')}`,
    name: path.split('/').join('-'),
    ...page.router,
    component: page.default
  }
})
