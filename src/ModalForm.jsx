/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ModalForm = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [childrenCount, setChildrenCount] = useState("");

  const handleSubmit = () => {
    if (!title || !question || !childrenCount) {
      alert("All fields are required!");
      return;
    }

    onSubmit({ title, question, childrenCount: parseInt(childrenCount, 10) });
    setTitle("");
    setQuestion("");
    setChildrenCount("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Add a New Node</h3>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter question/statement"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of children"
          value={childrenCount}
          onChange={(e) => setChildrenCount(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Node</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default ModalForm;
