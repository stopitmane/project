// src/components/IssueDetail.jsx
import React, { useState } from 'react';
import CommentForm from './CommentForm';

const IssueDetail = ({ issue }) => {
  const [comments, setComments] = useState(issue.comments || []);

  const handleNewComment = comment => {
    setComments(prev => [...prev, comment]);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{issue.title}</h2>
      <p className="mb-2 text-gray-600">Status: <span className="font-semibold">{issue.status}</span></p>
      <p className="mb-4">{issue.description}</p>

      <h3 className="font-semibold mb-2">Comments:</h3>
      {comments.length > 0 ? (
        <ul className="space-y-2">
          {comments.map(comment => (
            <li key={comment.id} className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <p className="text-sm">{comment.content}</p>
              <span className="text-xs text-gray-500">By {comment.author_name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No comments yet.</p>
      )}

      <CommentForm issueId={issue.id} onCommentAdded={handleNewComment} />
    </div>
  );
};

export default IssueDetail;
