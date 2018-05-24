import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

class Details extends Component {
  render(){
    return (
      <div>
        <h1>Użytkownik: {this.props.name}</h1>
        <img src={this.props.image} alt="zdjecie"/>
        <h2>Wynik: {this.props.score}</h2>
        <h3><a href={this.props.link}>Bezpośredni link</a></h3>
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
