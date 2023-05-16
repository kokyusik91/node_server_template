import express, { Express } from 'express'

import previewController from '../controller/previewLink/preview_controller'

const BASE = '/api'
const router = express.Router()

router.use('/previewLink', previewController)

export default router
