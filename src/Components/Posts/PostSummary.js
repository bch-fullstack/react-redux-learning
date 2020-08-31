import React from 'react'
import { Link } from 'react-router-dom'

class PostSummary extends React.Component {
    render(){
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">
                    <p>{this.props.post.content}</p>
                    <p>Here is the postId: {this.props.postId}</p>
                </div>
                <Link to={'/post/' + this.props.postId}>Read more</Link>
            </div>
        )
    }
} 

export default PostSummary;