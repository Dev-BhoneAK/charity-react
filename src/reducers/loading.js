import {SHOW_LOADING, HIDE_LOADING} from "../actions/loading";

const loading = (state = {loading: true}, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default loading;