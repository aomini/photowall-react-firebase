import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
const Single = props => {
  const { match, posts } = props;
  const id = Number(match.params.id);
  const post = posts.find(post => Number(post.id) === id);
  const comments = props.comments[id] || [];
  if (props.loading == true) {
    return <div className="loader">...loading</div>;
  } else if (post) {
    return (
      <div className="single-photo">
        <Photo
          photo={post}
          comments={props.comments}
          history={props.history}
          onRemovePost={props.removePostFromDb}
          redirectBack="true"
        />
        <Comment {...props} postId={id} comments={comments} />
      </div>
    );
  } else {
    return <h1>...no post found</h1>;
  }
};

export default Single;
