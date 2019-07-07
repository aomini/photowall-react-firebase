// import { postArray } from "./../data/posts";
import { REMOVE_POST, ADD_POST, ADD_COMMENT } from "./mappers/actionTypes";
import { combineReducers } from "redux";

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      if (!state[action.id]) {
        return {
          ...state,
          [action.id]: [action.comment]
        };
      } else {
        return { ...state, [action.id]: [...state[action.id], action.comment] };
      }

    case "LOAD_COMMENTS":
      return action.comments;

    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case REMOVE_POST:
      return state.filter(x => x.id !== action.id);
    case ADD_POST:
      return [...state, action.post];
    case "fetch_posts":
      return action.allPosts;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ posts, comments });
export default rootReducer;
