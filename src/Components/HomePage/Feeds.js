import React from 'react'
import AllPosts from '../Posts/AllPosts'
import Notifications from './Notifications'

const Feeds = () => (
    <div className="container">
        <AllPosts></AllPosts>
        <Notifications></Notifications>
    </div>
)

export default Feeds;