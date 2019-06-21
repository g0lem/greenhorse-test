import React from 'react';

export default class Level extends React.Component{

    render(){
        return (
            <div className="App">
                {this.props.level}
            </div>
        );
    }
  
  }