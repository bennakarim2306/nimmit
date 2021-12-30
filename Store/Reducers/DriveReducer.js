const initialLoginState = {
    queryResults: []
} // TODO change this and get the real loggedIn status from Server or App Cashe

export function toggleQuery(state = initialLoginState, action) {
    let nextState;

    switch(action.type) {
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