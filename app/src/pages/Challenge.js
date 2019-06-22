import React from 'react';
import axios from 'axios';
import ChallengeGroupModules from '../components/ChallengeGroupModules/ChallengeGroupModules';
import ChallengeCollect from '../components/ChallengeCollect/ChallengeCollect';
import Header from '../components/Header';

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
            this.setState({userId: res.data.userId, level: res.data.level, gold: res.data.gold});
        });
    }

    render(){
        return (
            <div className="App">
                <div>
                    <Header level={this.state.level} gold={this.state.gold}/>
                </div>
                <ChallengeCollect uncollectedReward={this.state.uncollectedReward} userId={this.state.userId}/>
                {
                    this.state.challengeGroup.map((elm, index)=>(
                        <ChallengeGroupModules value={elm} key={`CHALLENGE_NUMBER_${index}`}>
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