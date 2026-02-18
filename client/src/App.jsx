import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AdminDashboardStub = () => (
  <h2>Admin Dashboard - Complaints list coming soon</h2>
);

function App() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin");
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<SubmitComplaintPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminDashboardStub />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
