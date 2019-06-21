import React from 'react';
import Level from './modules/Level';
import Gold from './modules/Gold';
import UserName from './modules/UserName';
import Medals from './modules/Medals';
import ClubName from './modules/ClubName';

const ProfileModulesContext = React.createContext();

export default class ProfileModules extends React.Component {

    static Level(moduleProps) {
        return (
            <ProfileModulesContext.Consumer>
                {
                    (props) => <Level  level={props.level}/>
                }
            </ProfileModulesContext.Consumer>
        )
    }

    static Gold(moduleProps) {
        return (
            <ProfileModulesContext.Consumer>
                {
                    (props) => <Gold  gold={props.gold}/>
                }
            </ProfileModulesContext.Consumer>
        )
    }

    static UserName(moduleProps) {
        return (
            <ProfileModulesContext.Consumer>
                {
                    (props) => <UserName  userName={props.userName}/>
                }
            </ProfileModulesContext.Consumer>
        )
    }


    static ClubName(moduleProps) {
        return (
            <ProfileModulesContext.Consumer>
                {
                    (props) => <ClubName  clubName={props.clubName}/>
                }
            </ProfileModulesContext.Consumer>
        )
    }

    static Medals(moduleProps) {
        return (
            <ProfileModulesContext.Consumer>
                {
                    (props) => <Medals  medals={props.medals}/>
                }
            </ProfileModulesContext.Consumer>
        )
    }

    render() {
        return (
            <ProfileModulesContext.Provider value={this.props.value}>
                {this.props.children}
            </ProfileModulesContext.Provider>
        );
    }
}
