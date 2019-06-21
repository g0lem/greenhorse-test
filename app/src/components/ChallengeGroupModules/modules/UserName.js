import React from 'react';

export default class UserName extends React.Component{

    render(){
        return (
            <React.Fragment>
                {this.props.userName}
            </React.Fragment>
        );
    }
  
  }