import React from 'react';

export default class Skill extends React.Component{

    render(){
        return (
            <React.Fragment>
                {this.props.skill}
            </React.Fragment>
        );
    }
  
  }