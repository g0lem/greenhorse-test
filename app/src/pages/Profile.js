import React from 'react';
import axios from 'axios';
import ProfileModules from '../components/ProfileModules/ProfileModules';

export default class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userId: '',
            level: '',
            gold: null,
            userName: "",
            clubName: "",
            medals: [],
        }
    }

    componentDidMount(){
        axios.get('http://greenhorsegames.com/tests/frontend/profile.php').then(res=>{
            console.log(res.data);
            this.setState({...res.data});
        });
    }

    render(){
        return (
            <div className="App">
                <ProfileModules value={this.state}>
                    <ProfileModules.UserName/>
                    <ProfileModules.ClubName/>
                </ProfileModules>
            </div>
        );
    }
  
  }