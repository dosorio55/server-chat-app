import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import 'dotenv/config';
import { userRoutes } from "./routes/user.routes.js";

const PORT = process.env.PORT;
const router = express.Router();
const app = express();

// CORS
app.use(cors({
    origin: '*',
    credentials: true,
}));

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MONGOOSE CONNECTION
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

//ROUTES
router.get('/', (req, res) => res.send('sucessfully conected to Mongo'));

//SERVER USE ROUTES
app.use('/', router);
app.use('/user', userRoutes );

//SERVER CONNECTION
const server = app.listen(PORT, () => {
    console.log(`chat running in http://localhost:${PORT}`)
});