// src/components/CommentForm.jsx
import React, { useState } from 'react';
import api from '../services/api';

const CommentForm = ({ issueId, onCommentAdded }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('comments/', {
        issue: issueId,
        content,
      });
      onCommentAdded(res.data);
      setContent('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        placeholder="Write a comment..."
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full border p-2 rounded mb-2"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
