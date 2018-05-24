import React, { Component } from 'react';
import classes from './App.css';
import SearchBar from './containers/SearchBar/SearchBar';
import UserList from './containers/UserList/UserList';
import {connect} from 'react-redux';

class App extends Component {

  render(){
  console.log(this.props.users);
  return (
    <div className={classes.Container}>
      <div className={classes.Main}>
        <SearchBar/>
        <UserList
          className={classes.UserList}
        />
     </div>
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
