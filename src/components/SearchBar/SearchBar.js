import React, { Component } from 'react';
import {fetchUsers} from '../../actions/index';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

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
    this.setState({term: ''})
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onFormSubmit.bind(this)}>
      <input
      value = {this.state.term}
      onChange = { e => this.onInputChange(e.target.value)} />
      <button type="submit" >Search user</button>
      </form>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUsers}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
