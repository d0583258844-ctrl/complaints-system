import express from "express"
import complaintsRoutes  from "./routes/complaints.routes.js"

const app = express()
const PORT = 5000

app.use(express.json())

app.use("/api/complaints", complaintsRoutes)

app.get("/api/complaints", (req, res) => {
    console.log(res.json(complaints));
    
    res.json(complaints)
})




app.get("/", (req, res) => {
    res.send("The app is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT${PORT}`);

})


