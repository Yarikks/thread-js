import { SET_USER, UPDATE_USER_STATUS } from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        isAuthorized: Boolean(action.user?.id),
        isLoading: false
      };
    case UPDATE_USER_STATUS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
