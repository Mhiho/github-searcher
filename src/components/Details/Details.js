import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import classes from './Details.css';

class Details extends Component {
  render(){
    return (
      <div className={classes.Container}>
        <p className={classes.Name}>user: {this.props.name}</p>
        <img className={classes.Image} src={this.props.image} alt="profile_photo"/>
        <p className={classes.Score}>score: {this.props.score}</p>
        <p><a className={classes.Link} href={this.props.link}>direct link</a></p>
      </div>
    )
  }

}

export default Details;
// function mapStateToProps(state) {
//   return {
//     users: state.users
//   }
// }
//
//
// export default connect(mapStateToProps)(Details);
