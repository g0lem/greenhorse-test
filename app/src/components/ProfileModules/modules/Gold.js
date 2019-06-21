import React from 'react';
import ls from 'local-storage';

export default class Gold extends React.Component{

    constructor(props){
        super(props);

        this.getLocallyStoredGold = this.getLocallyStoredGold.bind(this);
    }

    getLocallyStoredGold(){
        const gold = Number.parseInt(ls('gold'));
        const serverGold = Number.parseInt(this.props.gold);
        if(gold){
            return serverGold + gold;
        }
        else {
            ls('gold', 0);
            return serverGold;
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.getLocallyStoredGold()}
            </React.Fragment>
        );
    }
  
  }