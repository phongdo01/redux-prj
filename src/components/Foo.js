import React, { Component } from 'react';
import {connect} from 'react-redux'
class Foo extends Component {
    
    compareTwoString (str1, str2) {
        if (str1.length != str2.length) {
            return str1.length > str2.length
        } else {
            return str1 > str2
        }
    }
    render() {
        let state = {
            name: 'Nguyen',
            age: 25
        }
        const stateInitialState = {...state}
        const newReducer = (state = stateInitialState, action) => {
            switch (action.type) {
                case 'ADD':
                    return {...state, action: 'ADD'}
                default:
                    return state
            }
        }
        const redux = require('redux')
        let store = redux.createStore(newReducer)
        store.subscribe(()=>console.log(store.getState()))
        store.dispatch({type: 'ADD'})
        return (
            <div>
                {this.props.contribute}
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contribute: state.contribute
    }
}
// export default Foo;
export default connect(mapStateToProps)(Foo)