import React from 'react';

const MAX_CHARS = 140;

class AddIdea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      count: this.props.description.length,
      overCount: false,
    };
  }

  handleTitleChange(e) {
    const value = e.target.value;

    this.setState(prevState => ({
      ...prevState,
      title: value,
    }));
  }

  handleDescriptionChange(e) {
    const value = e.target.value;
    const charCount = value.length;

    this.setState(prevState => ({
      ...prevState,
      ...(charCount > MAX_CHARS
        ? {
            overCount: true,
          }
        : {
            description: value,
            count: value.length,
            overCount: false,
          }),
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
            onChange={e => this.handleTitleChange(e)}
            value={this.state.title}
          />
        </label>
        <label>
          Description
          <textarea
            className="description"
            name="description"
            onChange={e => this.handleDescriptionChange(e)}
            value={this.state.description}
          />
        </label>
        <span>
          {this.state.count}/{MAX_CHARS}
        </span>
        <input className="submit" type="submit" value="Save" />
      </form>
    );
  }
}

export default AddIdea;
