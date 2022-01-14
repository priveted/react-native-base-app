export const defaultReducer = (state = { value: "Starty" }, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: "inc" }
        case 'counter/decremented':
            return { value: "UNINC" }
        default:
            return state
    }
}