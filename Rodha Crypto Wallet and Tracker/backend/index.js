import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import { route } from './Routes/userRoute.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'



const app = express()
dotenv.config();
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.urlencoded({extended:true}))
connectDB()

const port = process.env.PORT
app.use('/api/User',route)

app.listen(port,()=>{
    console.log(`Server Running Sucessfully http://localhost:${port}`)
})