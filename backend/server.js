import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import {articlesRouter} from './router/index.js';

dotenv.config()
const app = express()

const port = process.env.PORT || 3000
const mongoUri = process.env.DB_URL;

async function middleware() {
	app.listen(port, () => console.log(`Server URL: http://localhost:${port}/`))

	app.use(express.json())
	app.use(cookieParser())
	app.use(cors())
	app.use(fileUpload({}))
	app.use(express.static('static'))

	app.use('/api', articlesRouter)
}

async function run() {
	try {
		await mongoose.connect(mongoUri);
		middleware()
		console.log("You successfully connected to MongoDB!");
	} catch(err) {
		console.error('Server error', err)
	}
}
run().catch(console.dir);