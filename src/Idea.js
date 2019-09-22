import React from 'react';

const Idea = ({
  description,
  editing,
  handleUpdateIdea,
  handleDeleteIdea,
  handleEditIdea,
  time,
  title
}) => (
  <div>
    {editing ? (
      <form>Edit</form>
    ) : (
      <div>
        <h2>{title}</h2>
        <h4>{time}</h4>
        <p>{description}</p>
        <button className="edit" onClick={handleEditIdea}>Edit</button>
        <button className="delete" onClick={handleDeleteIdea}>Delete</button>
      </div>
    )}
  </div>
);

export default Idea;
