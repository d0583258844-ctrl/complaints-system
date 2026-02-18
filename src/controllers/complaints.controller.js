const complaints = [];

export const getComplaints =(req, res) => {
    res.json(complaints)
}

export const createComplaint =(req, res) => {
    const {category, message} = req.body

     if (!category || !message) {
    return res.status(400).json({ error: "category and message required" });
  }

  const newComplaint = { category, message, createdAt: new Date() };
  complaints.push(newComplaint)
  res.status(201).json(newComplaint)
}
