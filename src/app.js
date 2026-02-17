import express from "express"

const app = express()

const PORT = 5000

app.use(express.json())

const complaints = [];

app.get("/api/complaints", (req, res) => {
    console.log(res.json(complaints));
    
    res.json(complaints)
})

app.post("/api/complaints", (req, res) => {
  const { category, message } = req.body;

   if (!category || !message) {
    return res.status(400).json({ error: "category and message required" });
  }

   const complaint = {
    category,
    message,
    createdAt: new Date().toISOString()
  };

  complaints.push(complaint);

  res.status(201).json({ success: true, complaint });
});



app.get("/", (req, res) => {
    res.send("The app is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT${PORT}`);

})


