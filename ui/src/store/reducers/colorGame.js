import { FETCH_CGR_ALL } from "../actions";

const colorGameResultReducer = (CGResult = [], action) => {
    switch (action.type) {
        case FETCH_CGR_ALL:
            return action.payload;
        default:
            return CGResult;

    }
};

export default colorGameResultReducer;