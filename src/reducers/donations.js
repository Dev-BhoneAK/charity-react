import {RECEIVE_DONATIONS} from "../actions/donations";

const donations = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_DONATIONS:
            return {
                ...state,
                donations: action.donations
            }
        default:
            return state;
    }
}

export default donations;