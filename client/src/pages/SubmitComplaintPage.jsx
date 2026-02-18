import { useState } from "react";
import axios from "axios";

const SubmitComplaintPage = () => {
  const [category, setCategory] = useState("Food");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/complaints",
        {
          category,
          message,
        },
      );

      if (response.status === 201 || response.status === 200) {
        setStatus("The complaint was sent successfully and anonymously.");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      setStatus(error.message);
    }
  };

  return (
    <div>
      <h2>Send new complaint</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Category: </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Equipment">Equiepment</option>
            <option value="Commands">Commands</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label> Your complaint: </label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your complaint..."
          />
        </div>

        <button type="submit">Send</button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default SubmitComplaintPage;
