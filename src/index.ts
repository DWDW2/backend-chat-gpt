import globalRouter from "./global-router";
import express from 'express'
import { app, io, httpServer } from "./websocket/websocket";
import dotenv from 'dotenv'
dotenv.config()

app.use(express.json())
app.use('/api', globalRouter)

httpServer.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(process.env.GOOGLE_API_KEY)
})