import React from "react";
import Idea from "./Idea";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props.initialState
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Ideas</h1>
        {this.state.ideas.map((idea, i) => (
          <Idea
            key={i}
            {...idea}
          />
        ))}
        <button>Add Idea</button>
      </div>
    );
  }
}

export default App;
