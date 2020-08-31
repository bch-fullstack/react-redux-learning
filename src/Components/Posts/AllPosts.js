import React from 'react'
import PostSummary from './PostSummary'
import { connect } from 'react-redux'
import { removePosts, getPosts } from '../../store/actions/postActions'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class AllPosts extends React.Component {
    render(){
        return (
            <div>
                <button className="btn" onClick={this.props.removePost}>Remove All Post</button>
                { 
                    this.props.posts ? 
                    Object.keys(this.props.posts).map((postId, index) => 
                        <PostSummary post={this.props.posts[postId]} postId={postId} key={index}/>
                    ) :
                    'Loading ....'
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.firestore.data.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePost: () => {
            dispatch(removePosts());
        },
        getPosts: () => {
            dispatch(getPosts());
        }
    }
}

export default compose(
    firestoreConnect(() => ['posts']),
    connect(mapStateToProps, mapDispatchToProps)
)(AllPosts);