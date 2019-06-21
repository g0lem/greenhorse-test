import React from 'react';
import axios from 'axios';
import ChallengeGroupModules from '../components/ChallengeGroupModules/ChallengeGroupModules';

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
    }

    render(){
        return (
            <div className="App">
                Muie x2

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