import express from "express"
import { getComplaints, createComplaint, adminLogin } from "../controllers/complaints.controller.js"

const router = express.Router()

router.get("/", getComplaints)

router.post("/", createComplaint)

router.post("/login", adminLogin)

export default router