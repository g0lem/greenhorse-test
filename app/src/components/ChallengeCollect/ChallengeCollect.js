import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import ls from 'local-storage';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

export default class ChallengeCollect extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            modalIsOpen: false,
            hasRewardBeenCollected: false,
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal(){
        this.setState({modalIsOpen: true});
    }

    closeModal(){
        const formData = new FormData();
        formData.append('userId', this.props.userId);
        axios.post(`http://greenhorsegames.com/tests/frontend/collect.php`, formData).then(res=>{
            if(res.data.success){
                const gold = Number.parseInt(ls('gold'));
                const uncollectedRewardGold = Number.parseInt(this.props.uncollectedReward.reward);
                ls('gold', gold + uncollectedRewardGold);
                this.setState({hasRewardBeenCollected: true, modalIsOpen: false});
            }
        });
    }


    render(){
        return (
            <React.Fragment>
                <img src={'/images/box.png'}></img>
                <button onClick={this.openModal}>COLLECT</button>
                <div>
                    <Modal  isOpen={this.state.modalIsOpen}
                            contentLabel="Example Modal"
                            ariaHideApp={false}
                            style={customStyles}>

                        <React.Fragment>
                            <img src={'/images/box.png'}></img>
                            Rewards:
                            <div style={{color: 'green'}}>
                        
                                + {this.props.uncollectedReward.reward}
                                <img src={'/images/gold.png'}></img>
                            </div>
                            <div>
                                <button onClick={this.closeModal}>Collect</button>
                            </div>
                        </React.Fragment>
                    </Modal>
                </div>
                
            </React.Fragment>
        );
    }
  
  }