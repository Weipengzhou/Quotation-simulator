import React, { Component } from 'react';
import Jiantou from '../img/jiantou-left.png';
import { Router, Route, hashHistory,Link } from 'react-router';


const Header = (props) =>(
  <div className={props.className}>
      <span><Link to={props.link}>{props.txt}</Link></span><p>{props.text} </p>
  </div>
)

export default Header;
