import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let comment = e.target.elements.comment.value;
    if (comment) {
      this.props.addCommentToDb(this.props.postId, comment);
      e.target.elements.comment.value = "";
    }
  }

  render() {
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" name="comment" placeholder="Comment" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Comment;
