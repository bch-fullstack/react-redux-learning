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
                    this.props.posts.map(post => 
                        <PostSummary post={post} key={Math.random()*99}/>
                    ) :
                    'Loading ....'
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        posts: state.firestore ? state.firestore.data.posts : null
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