import {TOOGLE_BUTTON} from "../types/types";

const currentState = false

export default (state = currentState, action) => {
    switch (action.type) {
        case "TOOGLE_BUTTON":
            return !state;
        default:
            return state;
    }
};
