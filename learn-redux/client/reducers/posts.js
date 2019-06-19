function posts(state=[], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('liked');
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1 },
                ...state.slice(i+1)
            ]

        default:
            return state;
    }
}

export default posts;

//reducer takes state and action and returns us updated state