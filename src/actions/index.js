import axios from 'axios';


const root_url = `https://api.github.com/search/users`;

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchUsers(login) {
const request = axios.get(`${root_url}?q=${login}`);
  return(dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_USERS, payload: data.items })
    })
    .catch(console.log)
  }
}
