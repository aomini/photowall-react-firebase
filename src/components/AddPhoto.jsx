import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkEmpty(object) {
    return Object.values(object).every(x => x === null || x === "");
  }

  handleSubmit(e) {
    e.preventDefault();
    const image = {
      id: Number(new Date()),
      imageLink: e.target.elements.link.value,
      description: e.target.elements.description.value
    };

    if (!this.checkEmpty(image)) {
      this.props.onSavePost(image);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link of photo" name="link" />
            <input type="text" placeholder="description" name="description" />
            <button type="submit" className="savePhoto">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
