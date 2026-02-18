import * as complaintService from "../services/complaints.service.js";

export const getComplaints = async (req, res) => {
  try {
    const complaints = await complaintService.getAllComplaints();
    res.status(200).json(complaints);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const createComplaint = async (req, res) => {
  try {
    const { category, message } = req.body;
    if(!(category == "Food" || category == "Equipment" || category == "Commands" || category == "Other")){
      return res.status(400).json({error: "category is not allwod"})
     }
      if (!category || !message) {
      return res.status(400).json({ error: "category and message required" });
    }
    const result = await complaintService.createComplaint({category, message});
    res.status(201).json(result);
  } catch (err) {
    res
      .status(err.status || 500)
      .send({ error: err, msg: err.message || "Internal Server Error" });
  }
};


export const adminLogin = async (req, res) => {
  const { password } = req.body;

  console.log("Login attempt with password:", password);
  console.log("Expected password from ENV:", process.env.SECRET_KEY);

  if (password === process.env.SECRET_KEY) {
    return res.json({ token: "simple-admin-token-123" });
  } else {
    return res.status(401).json({ message: "Invalid Password" });
  }
};