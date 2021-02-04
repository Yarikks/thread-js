import {
  SET_ALL_POSTS,
  LOAD_MORE_POSTS,
  ADD_POST,
  SET_EXPANDED_POST,
  SET_EXPANDED_UPDATE_POST,
  UPDATE_POST
} from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_POSTS:
      return {
        ...state,
        posts: action.posts,
        hasMorePosts: Boolean(action.posts.length)
      };
    case LOAD_MORE_POSTS:
      return {
        ...state,
        posts: [...(state.posts || []), ...action.posts],
        hasMorePosts: Boolean(action.posts.length)
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts]
      };
    case SET_EXPANDED_POST:
      return {
        ...state,
        expandedPost: action.post
      };
    case SET_EXPANDED_UPDATE_POST:
      return {
        ...state,
        expandedUpdatedPost: action.post
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts.filter(post => post.id !== action.post.id)]
      };
    default:
      return state;
  }
};
