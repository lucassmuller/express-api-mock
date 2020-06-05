import express from 'express'
import requireDir from 'require-dir'
import mapRoutes from '../utils/mapRoutes'

const router = express.Router()

const requireRoutes = (path: string) => router.use(mapRoutes(path, requireDir(`./${path}`, { extensions: ['.js'] })))

requireRoutes('/hello')

export default router
