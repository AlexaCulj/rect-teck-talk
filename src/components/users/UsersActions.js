import {
  REQUEST_FETCH_USER,
  RECEIVE_FETCH_USER_SUCCESS,
  RECEIVE_FETCH_USER_FAILURE
} from "./UsersConstants";
import { getUsers } from "./UsersApi";

const requestFetchUsers = () => ({
  type: REQUEST_FETCH_USER,
  payload: {
    users: [],
    isFetching: true
  },
  requestAt: Date.now()
});

const receiveFetchUsersSuccess = users => ({
  type: RECEIVE_FETCH_USER_SUCCESS,
  payload: {
    users,
    isFetching: false
  },
  receivedAt: Date.now()
});

const receiveFetchUserFailure = () => ({
  type: RECEIVE_FETCH_USER_FAILURE,
  payload: {
    users: [],
    isFetching: false
  },
  receivedAt: Date.now()
});

export const fetchUsers = () => (dispatch, getState) => {
  dispatch(requestFetchUsers());

  return getUsers()
    .then(response => response.text())
    .then(users => dispatch(receiveFetchUsersSuccess(JSON.parse(users))))
    .catch(error => dispatch(receiveFetchUserFailure()));
};
