import React, { Component } from 'react';


//input: liked: boolean
// Output: onClick

const Like = (props) => {
    let classes ="fa fa-heart";
      if (!props.liked) classes += "-o";
        return ( 
        <i 
            onClick={props.onClick} 
             className={classes} 
            aria-hidden="true"
            />);
    }

 
export default Like;