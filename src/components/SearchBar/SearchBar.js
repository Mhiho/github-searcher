import React, { Component } from 'react';
import {fetchUsers} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import classes from './SearchBar.css';

class SearchBar extends Component {

  constructor(props){
    super(props);
  }
  state = {
    term: ''
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchUsers(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit.bind(this)}>
      <input
        className={classes.Input}
        value = {this.state.term}
        placeholder = "Type here"
      onChange = { e => this.onInputChange(e.target.value)} />
      <button
        className={classes.Button} type="submit" >Search user</button>
      </form>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
  }

}
function mapStateToProps(state) {
  return {
    users: state.users
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
