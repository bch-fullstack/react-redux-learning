import React from 'react'

const PostSummary = (props) => {
    return (
        <div className="card post">
            <div className="card-title">{props.post.title}</div>
            <div className="card-content">
                <p>{props.post.content}</p>
                <p className="grey">{props.post.time.toString()}</p>
            </div>
        </div>
    )
}

export default PostSummary;