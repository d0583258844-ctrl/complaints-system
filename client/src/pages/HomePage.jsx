import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Anonymous Complaint Box</h1>
      <p>Report issues regarding food, equipment, or orders securely and anonymously.</p>
      
      <div className="actions-wrapper">
        <Link to="/submit">
          <button className="btn-primary">Submit a Complaint</button>
        </Link>

        <Link to="/admin/login">
          <button className="btn-secondary">Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;