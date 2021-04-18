const initialLoginState = {
    isLoggedIn: false
} // TODO change this and get the real loggedIn status from Server or App Cashe

export function toggleLogin(state = initialLoginState, action) {
    let nextState;

    switch(action.type) {
        case 'FIRE_LOGIN':
            nextState = {
                ...state,
                isLoggedIn: action.value
            }   
        return nextState || state
        default:
            return state
    }
}