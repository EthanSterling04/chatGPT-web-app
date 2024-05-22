import React, { useState } from 'react';
import Form from './Form';
import Feed from './Feed';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedData, setFeedData] = useState([]);
  const [editData, setEditData] = useState(null);

  const handleFormSubmit = (data) => {
    if (editData) {
      setFeedData(feedData.map(item => (item.id === editData.id ? data : item)));
      setEditData(null);
    } else {
      setFeedData([{ ...data, id: Date.now() }, ...feedData]);
    }
    setShowForm(false);
  };

  const handleEdit = (id) => {
    const storyToEdit = feedData.find(item => item.id === id);
    setEditData(storyToEdit);
    setShowForm(true);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Donor Stories</h1>
      </header>
      <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Entry'}
      </button>
      {showForm && <Form onSubmit={handleFormSubmit} editData={editData} />}
      <Feed data={feedData} onEdit={handleEdit} />
    </div>
  );
};

export default App;
