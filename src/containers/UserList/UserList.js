import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Details from '../../components/Details/Details';
import classes from './UserList.css';

class UserList extends Component {
  state = {
    show: {}
  }

  showContentFunction(index) {
    const itemToShow = {
      ...this.state.show,
      [index]: true
    };
    this.setState({show: itemToShow})
  }
  componentDidMount() {
    return
  }
  render(){
    return (
      _.map(this.props.users, user=> user.slice(0,10).map((e,index) => (
        <div
          className={classes.Items}
          key={e.id}
          onClick={() => this.showContentFunction(e.id)}
          >
            { !this.state.show[e.id] ? e.login : null}
            { this.state.show[e.id] ? <Details
                                        className={classes.Details}
                                        name={e.login}
                                        image={e.avatar_url}
                                        score={e.score}
                                        link={e.html_url}
                                      /> : null}
        </div>
      )
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
