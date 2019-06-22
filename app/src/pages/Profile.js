import React from 'react';
import axios from 'axios';
import ProfileModules from '../components/ProfileModules/ProfileModules';
import Header from '../components/Header';

export default class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userId: '',
            level: '',
            gold: 0,
            userName: "",
            clubName: "",
            medals: [],
        }
    }

    componentDidMount(){
        axios.get('http://greenhorsegames.com/tests/frontend/profile.php').then(res=>{
            console.log(res.data);
            this.setState({
                userId: res.data.userId,
                level: res.data.level,
                gold: Number.parseInt(res.data.gold),
                userName: res.data.userName,
                clubName: res.data.clubName,
                medals: [],
            });
        });
    }

    render(){
        return (
            <div className="App">
                <div>
                    <Header level={this.state.level} gold={this.state.gold}/>
                </div>
                
                <ProfileModules value={this.state}>
                    <ProfileModules.UserName/>
                    <ProfileModules.ClubName/>
                    <ProfileModules.Gold/>
                </ProfileModules>
            </div>
        );
    }
  
  }