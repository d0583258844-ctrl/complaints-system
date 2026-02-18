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
    if(!(category == "food" || category == "equipment" || category == "orders")){
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
