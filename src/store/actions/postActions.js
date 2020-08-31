export const removePosts = () => ({ type: 'REMOVE_ALL_POSTS' })

// export const createPost = post => ({ type: 'CREATE_NEW_POST', post })

export const createPost = function(post){
    return (dispatch, getState, storeEnhancers) => {
        debugger;
        storeEnhancers.getFirestore().collection('posts').add({
            ...post,
            author: storeEnhancers.getFirebase().auth().currentUser.email
        })
        .then(() => {
            dispatch({ type: 'CREATE_NEW_POST' })
        })
        .catch(err => {
            dispatch({ type: 'CREATE_NEW_POST_FAILED', err: err })
        });
    };
}

export const getPosts = () => {
    return (dispatch, getState, storeEnhancers) => {
        storeEnhancers.getFirestore().collection('posts').get()
            .then(resp => {
                dispatch({ 
                    type: 'FETCHED_POSTS_SUCCESS',
                    resp: resp.docs
                })
            })
            .catch(err => {
                dispatch({ 
                    type: 'FETCHED_POSTS_FAIL', 
                    err: err 
                })
            });
    };
}

export const subscribeToChanges = () => {
    return (dispatch, getState, storeEnhancers) => {
        const observer = storeEnhancers.getFirestore().collection('posts');

        observer.onSnapshot(changes => {
            changes.docChanges().forEach(change => {
                if (change.type === 'added') {
                    console.log('POST_ADDITION_OBSERVED')
                    console.log(change.doc.data())
                    dispatch({
                        type: 'POST_ADDITION_OBSERVED',
                        post: change.doc.data()
                    })
                }

                if (change.type === 'removed') {
                    console.log('POST_REMOVAL_OBSERVED')
                    console.log(change.doc.data())
                    dispatch({
                        type: 'POST_REMOVAL_OBSERVED',
                        post: change.doc.data()
                    })
                }
              });
        })
    };
}