import React , {Fragment} from 'react'
import {Link, withRouter} from "react-router-dom"
import { signout, isAutheticated } from '../auth/helper'

const currentTab = (history,path) => {
    if (history.location.pathname === path) {
        return {color : "#2ecc72"}
    }else{
        return {color : "#FFFFFF"}   
    }
}

const Menu = ({history}) => (
    <div >
        <ul className="nav nav-tabs bg-dark">
           
           
            {!isAutheticated() && (
                <Fragment>
                     <li style={{color:"white"}}>
                        <dev className="nav-link">
                         Customer
                        </dev>
                    </li>
                    <li className="nav-item">
                        ..................... ........................... .........................................................................................................................................................................................................................................................................................
                </li>
                <li className="nav-item">
                    <Link style={currentTab(history,"/signup")} className="nav-link text-light" to="/signup">
                        SignUp
                    </Link>
                </li>
    
                <li className="nav-item" >
                    <Link style={currentTab(history,"/signin")} className="nav-link text-light" to="/">
                        SignIn
                    </Link>
                </li>
                </Fragment>
            )}


{/*this is view for user 01*/}
            {isAutheticated() && isAutheticated().user.role === 1 && (
            <Fragment>    
                <li className="nav-item">
                    <Link style={currentTab(history,"/")} className="nav-link" to="/user-two">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                            <span
                            className="nav-link text-warning"
                            onClick={ () => {
                                signout(() => {
                                    history.push("/");
                                })
                            }}>
                                Signout
                            </span>
                    </li>
                </Fragment>
            )}
    </ul>

    <ul className="nav nav-tabs bg-primary">

     {/*this is view for user 02*/}
            {isAutheticated() && isAutheticated().user.role === 0 && (
                        <Fragment>    
                            <li className="nav-item">
                                <Link style={currentTab(history,"/")} className="nav-link" to="/user-one">
                                    Home
                                </Link>
                            </li>
                        
                            <li className="nav-item">
                                <Link style={currentTab(history,"/admin/dashboard")} className="nav-link" to="/customer/profile">
                                Your Profile
                                </Link>
                            </li>

                    
                            <li className="nav-item">
                                        <span
                                        className="nav-link text-warning"
                                        onClick={ () => {
                                            signout(() => {
                                                history.push("/");
                                            })
                                        }}>
                                            Signout
                                        </span>
                                </li>
                            </Fragment>
                        )}
    </ul>
    </div>
);

export default withRouter(Menu);
