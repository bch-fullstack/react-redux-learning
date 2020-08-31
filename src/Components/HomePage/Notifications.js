import React from 'react';
import { subscribeToChanges } from '../../store/actions/postActions'
import { connect } from 'react-redux'

class Notifications extends React.Component {
    componentDidMount = () => {
        this.props.subscribeToChanges();
    }

    render() {
        return (
            <ul class="collapsible">
                { this.props.notifications.map(notification => {
                    return (
                        <li>
                            <div class="collapsible-header">
                                { notification.author } has added a new post
                                <span class="new badge"></span>
                            </div>
                        </li>
                    )
                    })    
                    
                }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.post.notifications)
    return {
        notifications: state.post.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        subscribeToChanges: () => {
            dispatch(subscribeToChanges())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);