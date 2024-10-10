import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import formRouter from './routes/form.routes.js'

app.use('/api/forms', formRouter);

app.get('/', (req, res) => {
    res.send("Home page of pyro")
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// app.use('/api', formRouter);


export { app }