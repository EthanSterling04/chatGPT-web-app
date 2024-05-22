import React, { useState, useEffect } from 'react';

const Form = ({ onSubmit, editData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setEmail(editData.email);
      setPhoto(editData.photo);
      setDescription(editData.description);
    } else {
      setName('');
      setEmail('');
      setPhoto('');
      setDescription('');
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { id: editData ? editData.id : Date.now(), name, email, photo, description };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Photo URL:</label>
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">{editData ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default Form;
