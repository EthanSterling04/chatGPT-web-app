import React, { useState } from 'react';
import Form from './Form';
import Feed from './Feed';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [feedData, setFeedData] = useState([]);

  const handleFormSubmit = (data) => {
    setFeedData([data, ...feedData]);
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Donor Stories</h1>
      </header>
      <button className="toggle-form-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add Entry'}
      </button>
      {showForm && <Form onSubmit={handleFormSubmit} />}
      <Feed data={feedData} />
    </div>
  );
};

export default App;
