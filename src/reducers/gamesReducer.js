const initState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: []
}
const gameReducer = (state=initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {...state, payload: action.payload.popular}
        default:
            return state
    }
}

export default gameReducer