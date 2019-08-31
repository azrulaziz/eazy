const listDefaultState = [];

export default (state = listDefaultState, action) => {
    switch(action.type) {

        case 'RECEIVE_LIST':
            return [...action.payload]

        default:
            return state
    }
}