import React from 'react';

class AddIdea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
    };
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.handleUpdateIdea(this.state.title, this.state.description);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            autoFocus
            className="title"
            type="text"
            name="title"
            onChange={e => this.handleChange(e)}
            value={this.state.title}
          />
        </label>
        <label>
          Description
          <textarea
            className="description"
            name="description"
            onChange={e => this.handleChange(e)}
            value={this.state.description}
          />
        </label>
        <input className="submit" type="submit" value="Save" />
      </form>
    );
  }
}

export default AddIdea;
