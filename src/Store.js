import language from './language/vie'
var redux = require('redux')
const viInitialState = {...language}
const vi = (state = viInitialState, action) => {
    switch (action.type) {
        case 'ALL':
            return state
        case '1':
            return viInitialState.contribute
        default:
            return viInitialState.distribute
    }
}
const store = redux.createStore(vi)

export {store};