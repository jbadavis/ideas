import React from 'react';
import {format} from 'date-fns';
import AddIdea from './AddIdea';

import styles from './Idea.module.css';

const Idea = ({
  description,
  editing,
  handleUpdateIdea,
  handleDeleteIdea,
  handleEditIdea,
  time,
  title,
}) => (
  <div className={styles.idea}>
    {editing ? (
      <AddIdea
        title={title}
        description={description}
        handleUpdateIdea={handleUpdateIdea}
      />
    ) : (
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.time}>
          {format(new Date(time), 'hh:mm aaa d/M/yy')}
        </p>
        <p>{description}</p>
        <button className="edit" onClick={handleEditIdea}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteIdea}>
          Delete
        </button>
      </div>
    )}
  </div>
);

export default Idea;
