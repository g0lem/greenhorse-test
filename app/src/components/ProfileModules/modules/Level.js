import React from 'react';

export default class Level extends React.Component{

    render(){
        return (
            <React.Fragment>
                <img src={'/images/level.png'}></img>
                {this.props.level}
            </React.Fragment>
        );
    }
  
  }