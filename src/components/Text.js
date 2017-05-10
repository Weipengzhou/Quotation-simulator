import React, {Component} from 'react';

const Text = (props) => (
  <ul className='hz'>
    {props.list.map((result, index) => (
      <li key={index} className={'inp ' + result.class}>
        <label>
          <span></span>
          <p>{result.name}</p>
        </label><input type="number" defaultValue={result.value}   onChange={(e) => props.onHande({value: e.target.value, id: index, type: result.type})}/>
        <b></b>
      </li>
    ))}
  </ul>
)

export default Text;
