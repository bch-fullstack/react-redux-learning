import React from 'react'
import Firebase from 'firebase';

class LogOut extends React.Component {
    render(){      
        return (
            <div className="container">
                {
                    this.props.uid ? 
                    <p>Something is wrong </p> : 
                    <p>You have been logged out</p>
                } 
            </div> 
        );
    }
}

export default LogOut;