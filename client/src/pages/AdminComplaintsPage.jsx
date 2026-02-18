import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminComplaintsPage = () => {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        
        const response = await axios.get('http://localhost:5000/api/admin', {
          headers: { 
            Authorization: `Bearer ${token}` 
          }
        });
        
        setComplaints(response.data);
      } catch (err) {
        setError('Failed to fetch complaints. Please make sure you are logged in.');
      }
    };

    fetchComplaints();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard - Complaints List</h1>
      
      {error && <p className="error">{error}</p>}

      <div className="list-container">
        {complaints.length === 0 && !error && <p>No complaints found.</p>}
        
        {complaints.map((complaint) => (
          <div key={complaint._id} className="complaint-item">
            <p><strong>Category:</strong> {complaint.category}</p>
            <p><strong>Message:</strong> {complaint.message}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComplaintsPage;