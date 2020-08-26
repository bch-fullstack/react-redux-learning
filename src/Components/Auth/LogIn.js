import React from 'react';
import { logIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'

class LogIn extends React.Component {
    constructor(props) {
        super(props);  
    
        this.state = {
            email: null,
            password: null
        };

        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(this);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission = (e) => {
        e.preventDefault();
        this.props.logIn(this.state);
    }

    render(){
        return (
            <div className="container">
                {
                    this.props.loginStatus ? 
                    <div>You are now logged in</div> :
                    <form onSubmit={this.handleSubmission}>
                        <div className="input-field">
                            <input id="email" type="text" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="email">Email:</label>
                        </div>
                        <div className="input-field">
                            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Log In</button>
                    </form>
                }
                
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        loginStatus: !state.firebase.auth.isEmpty
    }
}


const mapDispatchToProps = dispatch => {
    return {
        logIn: credentials => {
            dispatch(logIn(credentials));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);