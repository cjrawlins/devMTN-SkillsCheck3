import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {logoutUser} from '../redux/reducer';
import store from '../redux/store'



class Nav extends Component {
    constructor() {
        super();

        const reduxState = store.getState();

        this.state = {
            username: reduxState.username,
            profilePic: `https://robohash.org/${reduxState.username}.png`
        }
        this.logout = this.logout.bind(this)
    }

    logout() {
        console.log("Logout Called");
        axios.delete('/api/auth/logout').then( res => {
            this.props.logoutUser();
            //this.props.history.push('/');
            // res.status(200).send("Logged Out");
        } ).catch( err => console.log(err))
    }

    render() {
        let pic = this.state.profilePic;
        console.log("Profile Pic on Nav",this.state.profilePic);
        console.log("Username on Nav",this.state.username);
        return(
            <div className="Nav">
                <div className="nav-top-container">
                    <div className="nav-profile-container">
                        <img className="nav-profile-image" alt="./media/no_image.png" src={pic}/>
                        <p className="nav-profile-name">{this.state.username}</p>
                    </div>
                    <Link to="/dashboard">
                    <img className="nav-link-images" src="./media/home_logo.png" alt="./media/no_image.png" />
                    </Link>
                    <Link to="/new">
                    <img className="nav-link-images" src="./media/new_logo.png" alt="./media/no_image.png" />
                    </Link>
                </div>
                <div className="nav-bottom-container">
                    <Link to="/">
                    <img className="nav-link-images" onClick={this.logout} src="./media/shut_down.png" alt="./media/no_image.png" />
                    </Link>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser})(Nav);