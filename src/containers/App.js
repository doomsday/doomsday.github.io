import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from './../components/User'
import Page from './../components/Page'
import * as pageActions from './../actions/PageActions'
import * as userActions from './../actions/UserActions'

class App extends Component {
    render() {
        // This props are from mapStateToProps
        const { user, page } = this.props
        const { getPhotos } = this.props.pageActions
        const { handleLogin } = this.props.userActions

        return <div className='row'>
            <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
            <User name={user.name} handleLogin={handleLogin} error={user.error} />
        </div>
    }
}

/**
 * Сomponent will subscribe to Redux store updates. Any time it updates,
 * mapStateToProps will be called. Its result must be a plain object*, and it
 * will be merged into the component’s props */
function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        /**
         * Turns an object whose values are action creators, into an object
         * with the same keys, but with every action creator wrapped into a
         * dispatch call so they may be invoked directly 
         * 
         * setYear becomes:
         * 
         * store.dispatch({
		 *		type: 'SET_YEAR'
		 *		payload: 2016 })
         */
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

/**
 * Connects a React component to a Redux store. */
export default connect(mapStateToProps,mapDispatchToProps)(App)