import React from 'react';

export default class Medals extends React.Component{

    render(){
        return (
            <React.Fragment>
                {this.props.medals.map(elm=><div>{elm}</div>)}
            </React.Fragment>
        );
    }
  
  }