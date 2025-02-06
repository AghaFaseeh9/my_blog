"use client";
import { useState } from "react";

export default function Comments() {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;

    setComments((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-gray-900 rounded-lg shadow-lg text-white">
      <h3 className="text-xl font-semibold mb-4 text-gray-200">Comments</h3>

      <ul className="space-y-2 mb-6" aria-live="polite">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li
              key={index}
              className="p-3 bg-gray-800 rounded-md border border-gray-700 text-gray-300"
            >
              {comment}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          aria-label="Add a comment"
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Post comment"
        >
          Post
        </button>
      </div>
    </div>
  );
}
