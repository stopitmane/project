// src/pages/IssuePage.jsx
import React, { useEffect, useState } from 'react';
import IssueList from '../components/IssueList';
import IssueDetail from '../components/IssueDetail';
import AddIssueModal from '../components/AddIssueModal';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const IssuePage = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('issues/')
      .then(res => setIssues(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <div className="relative flex h-screen">
      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>

      {/* Main layout */}
      <div className="w-1/3 border-r p-4">
        <IssueList issues={issues} onSelect={setSelectedIssue} />
      </div>
      <div className="w-2/3 p-4">
        {selectedIssue ? (
          <IssueDetail issue={selectedIssue} />
        ) : (
          <p>Select an issue to view details</p>
        )}
        <AddIssueModal onIssueAdded={issue => setIssues(prev => [...prev, issue])} />
      </div>
    </div>
  );
};

export default IssuePage;
