import express from 'express'
import cors from 'cors'
var app = express();

const whiteList = ["http://127.0.0.1:5173", "http://localhost:4000"];
const corsOptions = {
    origin: function (origin, cb) {
        if (whiteList.includes(origin)) {
            cb(null, true)
        } else {
            cb(new Error("Error de cors"))
        }
    },
};


app.use(cors());

export default app