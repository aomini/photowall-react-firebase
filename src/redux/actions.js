import { REMOVE_POST, ADD_POST, ADD_COMMENT } from "./mappers/actionTypes";
import { database } from "./../database/config";

// Async actions

export function fetchPostsFromDb() {
  return dispatch => {
    return database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        let posts = [];
        snapshot.forEach(childSnapshot => {
          posts.push(childSnapshot.val());
        });
        dispatch(fetchPosts(posts));
      });
  };
}

export function addPostToDb(post) {
  return dispatch => {
    return database
      .ref("posts")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      });
  };
}

export function removePostFromDb(id) {
  return dispatch => {
    return database
      .ref("posts")
      .child(id)
      .remove()
      .then(() => {
        dispatch(removePost(id));
      });
  };
}

export function addCommentToDb(id, comment) {
  return dispatch => {
    return database
      .ref(`comments/${id}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(id, comment));
      });
  };
}

export function startLoadingComments() {
  return dispatch => {
    return database
      .ref("comments")
      .once("value")
      .then(snapShot => {
        let comments = {};
        snapShot.forEach(function(child) {
          comments[child.key] = Object.values(child.val());
        });
        dispatch(loadComments(comments));
      });
  };
}

// ACTION CREATORS
export function removePost(id) {
  return { type: REMOVE_POST, id };
}

export function addPost(post) {
  return { type: ADD_POST, post };
}

export function addComment(id, comment) {
  return { type: ADD_COMMENT, comment, id };
}

export function fetchPosts(allPosts) {
  return { type: "fetch_posts", allPosts };
}

export function loadComments(comments) {
  return { type: "LOAD_COMMENTS", comments };
}
