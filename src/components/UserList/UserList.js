import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import User from './User';

class UserList extends Component {
  render(){
    return (
      _.map(this.props.users, user=> user.slice(0,10).map(e =>
      ( <div>{e.login}</div>)
    )

)
)
  }
}



function mapStateToProps(state) {
  return {
    users: state.users
  }

}

export default connect(mapStateToProps)(UserList);
