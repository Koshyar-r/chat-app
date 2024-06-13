import express from 'express'
import dotnev from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToDB from './db/connectToDB.js'

const app = express()
const PORT = process.env.PORT || 5000

dotnev.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectToDB()
    console.log(`Running on ${PORT}!`)
})