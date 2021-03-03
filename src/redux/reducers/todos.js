import {ADD_TODO, TOGGLE_TODO} from "../actionTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ADD_TODO:
            const {id, content} = action.payload;

            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        case TOGGLE_TODO:

            let toggleId = action.payload.id;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [toggleId]: {
                        ...state.byIds[toggleId],
                        completed: !state.byIds[toggleId].completed
                    }
                }
            }
        default:
            return state;
    }
}