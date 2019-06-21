import React from 'react';

export default class ClubName extends React.Component{

    render(){
        return (
            <div className="App">
                {this.props.clubName}
            </div>
        );
    }
  
  }