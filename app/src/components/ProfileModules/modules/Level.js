import React from 'react';

export default class Level extends React.Component{

    render(){
        return (
            <React.Fragment>
                {this.props.level}
            </React.Fragment>
        );
    }
  
  }