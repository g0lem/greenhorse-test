import React from 'react';

export default class UserName extends React.Component{

    render(){
        return (
            <div className="App">
                {this.props.userName}
            </div>
        );
    }
  
  }