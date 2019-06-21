import React from 'react';
import axios from 'axios';
import ChallengeGroupModules from '../components/ChallengeGroupModules/ChallengeGroupModules';
import ChallengeCollect from '../components/ChallengeCollect/ChallengeCollect';

export default class Challenge extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            challengeGroup: [],
            uncollectedReward: {},
        }
    }

    componentDidMount(){
        axios.get('http://greenhorsegames.com/tests/frontend/challenge.php').then(res=>{
            this.setState({...res.data});
        });
        axios.get('http://greenhorsegames.com/tests/frontend/profile.php').then(res=>{
            this.setState({userId: res.data.userId});
        });
    }

    render(){
        return (
            <div className="App">
                <ChallengeCollect uncollectedReward={this.state.uncollectedReward} userId={this.state.userId}/>
                {
                    this.state.challengeGroup.map(elm=>(
                        <ChallengeGroupModules value={elm}>
                            <div>
                                <ChallengeGroupModules.UserName/>
                                <ChallengeGroupModules.Skill/>
                            </div>
                            
                        </ChallengeGroupModules>
                    ))
                }
            </div>
        );
    }
  
  }