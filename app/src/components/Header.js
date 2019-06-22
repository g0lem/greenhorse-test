import React from 'react';
import {Link} from 'react-router-dom'
import ProfileModules from './ProfileModules/ProfileModules';

export default class Header extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div>
                    <img src={'/images/logo.png'}></img>
                    <ProfileModules value={this.props}>
                        <ProfileModules.Gold/>
                        <ProfileModules.Level/>
                    </ProfileModules>
                </div>
                <Link to={'./challenge'}>Challenge</Link>
                <Link to={'/'}>Profile</Link>
            </React.Fragment>
        );
    }
  
  }