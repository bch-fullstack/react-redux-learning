import React from 'react';
import Firebase from 'firebase';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleChange = (e) => {
        console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();

        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).then(resp => {
            Firebase.firestore().collection('users').doc(resp.user.uid).set({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            }).then(() => {
                console.log('User account created.');
                console.log(resp.user.uid);
            })
            
            // logged in 
        }).catch(err => {
            console.log('Create account fail: ' + err);
        });

        
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmission}>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="firstname" type="text" className="validate"/>
                        <label htmlFor="firstname">First Name:</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="lastname" type="text" className="validate"/>
                        <label htmlFor="lastname">Last Name:</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="email" type="text" className="validate"/>
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input-field">
                        <input onChange={this.handleChange} id="password" type="password" className="validate"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register</button>
                </form>
            </div>
        );
    }
} 

export default Register;