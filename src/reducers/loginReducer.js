
export default function loginReducer(state = false, action) {
    switch (action.type) {
        case 'LOGIN':
            return true;
            default:
                return state
    }
}