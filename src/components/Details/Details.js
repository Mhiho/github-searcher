import React from 'react';
import classes from './Details.css';

const Details = (props)=> (
      <div className={classes.Container}>
        <p className={classes.Name}>user: {props.name}</p>
        <img className={classes.Image} src={props.image} alt="profile_photo"/>
        <p className={classes.Score}>score: {props.score}</p>
        <p><a className={classes.Link} href={props.link}>direct link</a></p>
      </div>
    );

export default Details;
