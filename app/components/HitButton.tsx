"use client";
import { useState } from "react";
import axios from "axios";

const HitButton: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleHit = async () => {
    try {
      const apiResponse = await axios.get<string>('http://localhost:4000');
      setResponse(apiResponse.data);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <div>
      <button onClick={handleHit}>Hit</button>
      {response && <p>Response from API: {response}</p>}
    </div>
  );
};

export default HitButton;
