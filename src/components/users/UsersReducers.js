import { USER_ACTION_TYPES } from "./UsersConstants";

const initialState = {
  isFetching: false,
  users: []
};

export const users = (state = initialState, action) =>
  USER_ACTION_TYPES.includes(action.type) ? action.payload : state;
