import React from 'react';
import Idea from './Idea';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.initialState,
    };
  }

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
      <div className="App">
        <h1>Ideas</h1>
        {this.state.ideas.map((idea, i) => (
          <Idea
            key={i}
            handleUpdateIdea={this.handleUpdateIdea(i)}
            handleDeleteIdea={this.handleDeleteIdea(i)}
            handleEditIdea={this.handleEditIdea(i)}
            {...idea}
          />
        ))}
        <button onClick={this.handleAddIdea}>Add</button>
      </div>
    );
  }
}

export default App;
