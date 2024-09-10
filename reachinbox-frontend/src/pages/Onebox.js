import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await axios.get('API_URL_HERE/onebox/list');
        setThreads(response.data);
      } catch (error) {
        console.error('Failed to fetch threads:', error);
      }
    };
    fetchThreads();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`API_URL_HERE/onebox/${id}`);
      setThreads(threads.filter((thread) => thread.id !== id));
    } catch (error) {
      console.error('Failed to delete thread:', error);
    }
  };

  const handleSelectThread = (id) => {
    // Fetch details of selected thread
    setSelectedThread(id);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'D' && selectedThread) {
        handleDelete(selectedThread);
      } else if (e.key === 'R' && selectedThread) {
        // Implement Reply Functionality
      }
    };
  
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedThread]);
  

  return (
    <div className="p-4">
      <h1>Onebox</h1>
      <ul>
        {threads.map((thread) => (
          <li key={thread.id} onClick={() => handleSelectThread(thread.id)}>
            {thread.title}
            <button onClick={() => handleDelete(thread.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Onebox;
