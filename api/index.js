import app from "./app.js"; 
import dotenv from 'dotenv'
import router from "./routes/routes.js";

dotenv.config()

app.use("/api", router);

app.listen(4000, () => {
    console.log('Server runing...')
})