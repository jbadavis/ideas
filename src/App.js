import React from 'react';
import Idea from './Idea';
import sortIdeasAlphabetically from './utils/sortIdeasAlphabetically';
import sortIdeasByDate from './utils/sortIdeasByDate';

import styles from './App.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.initialState,
      sort: '',
    };
  }

  handleSortChange = e => {
    const value = e.target.value;
    const sortMethod =
      value === 'date' ? sortIdeasByDate : sortIdeasAlphabetically;

    this.setState(state => ({
      ...state,
      sort: value,
      ideas: sortMethod(state.ideas),
    }));
  };

  handleAddIdea = () => {
    this.setState(prevState => ({
      ...prevState,
      ideas: [
        ...prevState.ideas,
        {
          title: '',
          description: '',
          time: '',
          editing: true,
        },
      ],
    }));
  };

  handleUpdateIdea = num => (title, description) => {
    this.setState(prevState => ({
      ...prevState,
      ideas: prevState.ideas.map((idea, i) => {
        if (num === i) {
          idea.description = description;
          idea.editing = !idea.editing;
          idea.time = new Date();
          idea.title = title;
        }

        return idea;
      }),
    }));
  };

  handleDeleteIdea = num => () => {
    this.setState(prevState => ({
      ...prevState,
      ideas: prevState.ideas.filter((idea, i) => i !== num),
    }));
  };

  handleEditIdea = num => () => {
    this.setState(prevState => ({
      ...prevState,
      ideas: prevState.ideas.map((idea, i) => {
        if (num === i) {
          idea.editing = !idea.editing;

          return idea;
        }

        return idea;
      }),
    }));
  };

  render() {
    return (
      <div>
        <header className={styles.header}>
          <h1>Ideas</h1>
          <label>
            Sort:
            <select
              className={styles.sortSelect}
              onChange={this.handleSortChange}>
              <option />
              <option value="alphabetically">Alphabetically</option>
              <option value="date">Date</option>
            </select>
          </label>
          <button className={styles.addIdea} onClick={this.handleAddIdea}>
            Add Idea
          </button>
        </header>
        <main>
          <div className={styles.ideas}>
            {this.state.ideas.map((idea, i) => (
              <Idea
                key={i}
                handleUpdateIdea={this.handleUpdateIdea(i)}
                handleDeleteIdea={this.handleDeleteIdea(i)}
                handleEditIdea={this.handleEditIdea(i)}
                {...idea}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
