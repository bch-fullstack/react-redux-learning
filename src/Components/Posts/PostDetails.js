import React from 'react'

class PostDetails extends React.Component {
    render(){
        return(
            <div className = "container" >
                <div className="card">
                    <div className="card-title">
                        Card title { this.props.match.params.id }
                </div>
                    <div className="card-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nemo. Officiis, numquam esse! Facere quia aliquid repellendus tempore similique itaque quae facilis numquam est quos debitis nihil, at in explicabo?
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails;