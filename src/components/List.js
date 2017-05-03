import React, { Component } from 'react';


const List = (props) => (
  <ul className={props.className}>
    {props.list.map((result,index)=>(<li key={index}  onClick={()=>props.GetThings({index,result})}>{result.name}</li>))}
  </ul>
)

const DirectoryList = (props) => (
    <ul className={props.className}>
      {props.list.map((result,index)=>(<li key={index} onClick={()=>props.GetThings({index,result})}>{result.name}</li>))}
      </ul>
)

const LastList = (props) =>(
  <ul className='last clearfix'>
  {props.list.map(
    (result,index)=>(<li key={index} className={result.class}><span></span><p>{result.name}</p><b><i>{result.value}</i>㎡</b></li>)
  )}
  </ul>
)
export { List , DirectoryList ,LastList}
