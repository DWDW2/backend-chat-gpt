import globalRouter from "./global-router";
import express from 'express'
import { app, io, httpServer } from "./websocket/websocket";
import dotenv from 'dotenv'
import connectDB from "./chat/db/connectDB";
import cors from 'cors'
dotenv.config()
connectDB()
app.use(express.json())
app.use(cors())
app.use('/api', globalRouter)

httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(process.env.GOOGLE_API_KEY)
})