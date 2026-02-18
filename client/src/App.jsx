
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmitComplaintPage from './pages/SubmitComplaintPage';

const HomeStub = () => <h2>home page  (soon)</h2>;
const SubmitStub = () => <h2>  send complaint page (soon)</h2>;

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeStub />} />
        
          <Route path="/submit" element={<SubmitComplaintPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;