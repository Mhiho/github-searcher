import axios from 'axios';


const root_url = `https://api.github.com/search/users`;

export const FETCH_USERS = 'FETCH_USERS';

export function fetchUsers(login) {
const request = axios.get(`${root_url}?q=${login}`);
// const andSoOn = request.data;
  return {
    type: FETCH_USERS,
    payload: request
  }
}