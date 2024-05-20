import React from 'react';

const Feed = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>{item.name}</h3>
          <p>{item.email}</p>
          <img src={item.photo} alt="Profile" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
