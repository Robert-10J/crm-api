import express from 'express'
import cors from 'cors'
import v1ClientRouter from '../v1/routes/clientRoutes.js'
import db from '../db/database.js'

class Server {
  constructor () {
    this.app = express()
    this.PORT = process.env.PORT || 4000
    this.API_PATHS = {
      clients: '/api/v1/clients'
    }
    this.dbConnection()
    this.middlewares()
    this.routes()
  }

  async dbConnection () {
    try {
      await db.authenticate()
      db.sync()
      console.log('Database connection established')
    } catch (error) {
      console.log(error)
    }
  }

  middlewares () {
    this.app.use(cors())
    // this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
  }

  routes () {
    this.app.use(this.API_PATHS.clients, v1ClientRouter)
  }

  listen () {
    this.app.listen(this.PORT, () => {
      console.log(`Listening on port: ${this.PORT} 🚀`)
    })
  }
}

export default Server
