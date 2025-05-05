// src/components/IssueList.jsx
import React from 'react';

const IssueList = ({ issues, onSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Issues</h2>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <ul className="space-y-2">
          {issues.map(issue => (
            <li
              key={issue.id}
              onClick={() => onSelect(issue)}
              className="cursor-pointer p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 border"
            >
              <div className="font-semibold">{issue.title}</div>
              <div className="text-sm text-gray-500">Status: {issue.status}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IssueList;
