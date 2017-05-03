import React, { Component } from 'react';

const Button = (props) =>(

  <label className={props.className}>
  {props.text}
  <input type="checkbox" onClick={()=>props.leClick({checked:!props.checked})}  className={props.className}></input>
  </label>
)

export default Button;
