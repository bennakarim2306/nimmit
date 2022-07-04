const initialState = {
    isLoggedIn: false,
    queryResults: []
} // TODO change this and get the real loggedIn status from Server or App Cashe

export function globalDispatcher(state = initialState, action) {
    let nextState;

    switch(action.type) {
        case 'FIRE_LOGIN':
            nextState = {
                ...state,
                isLoggedIn: action.value
            }   
        return nextState || state
        case 'QUERY_DRIVES':
            nextState = {
                ...state,
                queryResults: action.value
            }
            return nextState || state
        default:
            return state
    }
}