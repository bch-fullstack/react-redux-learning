import React from 'react'
import Logo from './Logo';
import NonRegisteredUsers from './NonRegisteredUsers';
import RegisteredUsers from './RegisteredUsers';

class NavigationBar extends React.Component {
    render(){
        return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Logo></Logo>
                    { 
                        this.props.uid ? 
                        <ul className="right hide-on-med-and-down">
                            <RegisteredUsers></RegisteredUsers>
                        </ul> : 
                        <ul className="right hide-on-med-and-down">
                            <NonRegisteredUsers></NonRegisteredUsers>
                        </ul>
                    }    
                </div>    
            </nav>
        )
    }
}

export default NavigationBar;