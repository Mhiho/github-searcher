import React,{Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Details from '../Details/Details';

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
  render(){
    return (
      _.map(this.props.users, user=> user.slice(0,10).map((e,index) =>
      ( <div
          key={e.id}
          onClick={() => this.showContentFunction(e.id)}
        >
            {e.login}
            { this.state.show[e.id] ? <Details
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
