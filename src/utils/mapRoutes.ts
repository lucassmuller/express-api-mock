import express from 'express'

const router = express.Router()

const mapRoutes = (rootPath: string, routes: {[key: string]: any}) => {
  if (!routes) return

  Object.keys(routes)
    .map(k => routes[k].default as IRoute)
    .sort((a, b) => (a.priority || 0) - (b.priority || 0))
    .map(({ method, path, middleware, action }) => {
      router[method.toLowerCase()](rootPath + path, ...(middleware || []), action)
    })

  return router
}

export default mapRoutes
