import React from 'react';

export default class Medals extends React.Component{

    render(){
        return (
            <div className="App">
                {this.props.medals.map(elm=><div>{elm}</div>)}
            </div>
        );
    }
  
  }