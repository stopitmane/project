// src/components/AddIssueModal.jsx
import React, { useState } from 'react';
import api from '../services/api';

const AddIssueModal = ({ onIssueAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await api.post('issues/', {
        title,
        description,
        project: 1  // Replace with dynamic project ID if needed
      });
      onIssueAdded(response.data);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error adding issue:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 border-t pt-4">
      <h3 className="font-semibold mb-2">Add New Issue</h3>
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        className="w-full border p-2 mb-2 rounded"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddIssueModal;
