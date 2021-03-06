import {FETCH_USERS} from '../actions/index';

const initState = {
  users: []
}

export default function(state = [], action) {
  switch (action.type){
    case FETCH_USERS:
      return {...state, users: action.payload
    };
  }
  return state;
}
