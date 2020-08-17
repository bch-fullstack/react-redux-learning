import React from 'react'
import { Redirect } from 'react-router-dom';
import Firebase from 'firebase';

class CreateNewPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posted: false
        };
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

        Firebase.firestore().collection('posts').add({
            title: this.state.postTitle,
            content: this.state.postContent,
            time: new Date(),
            user: Firebase.auth().currentUser.uid
        }).then(() => {
            this.setState({
                posted: true
            })
        })
    }

    render() {
        return(
            <div className="container">
                { this.state.posted ? <Redirect to="/"/> : '' }
                {   
                    !this.props.uid ?
                    <Redirect to="/login"/> :
                    <form onSubmit={this.handleSubmission}>
                        <div className="input-field">
                            <input onChange={this.handleChange} id="postTitle" type="text" className="validate"/>
                            <label htmlFor="postTitle">Title:</label>
                        </div>
                        <div className="input-field">
                            <textarea onChange={this.handleChange} id="postContent" className="materialize-textarea" data-length="500"></textarea>
                            <label htmlFor="postContent">Content:</label>
                        </div>

                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                    </form>
                }
            </div>
        )
    }
}


export default CreateNewPost;

