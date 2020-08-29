import React from 'react'

class PostSummary extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="card post">
                <div className="card-title">{this.props.post.title}</div>
                <div className="card-content">
                    <p>{this.props.post.content}</p>
                    <p>Here is the postId: {this.props.postId}</p>
                </div>
            </div>
        )
    }
} 

export default PostSummary;