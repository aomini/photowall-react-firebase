import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Posts = props => {
  const { posts, removePostFromDb } = props;
  return (
    <React.Fragment>
      <Link className="addIcon" to="/addPhoto" />
      <div className="photo-grid">
        {posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map(post => (
            <Photo
              photo={post}
              key={post.id}
              onRemovePost={removePostFromDb}
              comments={props.comments}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired
};

export default Posts;
