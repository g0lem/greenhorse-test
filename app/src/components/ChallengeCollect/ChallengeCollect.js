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
                const updatedCollectedGold = gold + uncollectedRewardGold;
                ls('gold', updatedCollectedGold);
                this.setState({hasRewardBeenCollected: true, modalIsOpen: false});
            }
        });
    }


    render(){
        return (
            <React.Fragment>
                <button onClick={this.openModal}>OPEN</button>
                <div>
                    <Modal  isOpen={this.state.modalIsOpen}
                            contentLabel="Example Modal"
                            ariaHideApp={false}
                            style={customStyles}>

                        <React.Fragment>
                            <div>
                                {this.props.uncollectedReward.reward}
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