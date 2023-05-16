import express, { Express, Request, Response } from 'express'
// import initEnv from './config/init_env';
import cors from 'cors'
import logger from 'morgan'
import router from './src/routes/router'

// initEnv();

const app: Express = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server')
})
app.listen(process.env.PORT, () => {
  console.log('SERVER_RUNNING ::: ' + process.env.PORT)
})
