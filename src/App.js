import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import {connect} from 'react-redux';
import {FETCH_USERS} from './actions';
import {rootReducer} from './reducers/rootReducer';
import _ from 'lodash';

class App extends Component {
  constructor(props){
    super(props)

  }

  render(){
  console.log(this.props.users);
  const example = _.map(this.props.users, user=> (
    <li>{user.login}</li>
  ));
  return (
    <div>
       <SearchBar
       />
    <ul>{example}</ul>
    </div>
  );
 }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }

}



export default connect(mapStateToProps)(App);
