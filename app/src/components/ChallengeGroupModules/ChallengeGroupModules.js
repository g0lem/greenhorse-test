import React from 'react';
import UserName from './modules/UserName';
import Skill from './modules/Skill';


const ChallengeGroupModulesContext = React.createContext();

export default class ChallengeGroupModules extends React.Component {

    static Skill(moduleProps) {
        return (
            <ChallengeGroupModulesContext.Consumer>
                {
                    (props) => <Skill  skill={props.skill}/>
                }
            </ChallengeGroupModulesContext.Consumer>
        )
    }

    static UserName(moduleProps) {
        return (
            <ChallengeGroupModulesContext.Consumer>
                {
                    (props) => <UserName  userName={props.userName}/>
                }
            </ChallengeGroupModulesContext.Consumer>
        )
    }


    render() {
        return (
            <ChallengeGroupModulesContext.Provider value={this.props.value}>
                {this.props.children}
            </ChallengeGroupModulesContext.Provider>
        );
    }
}
