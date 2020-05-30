import { SET_CONTENT, SET_PAGE, SET_FILE, SET_INDEX } from '../actions/types';
import { DEFAULT_WORDS } from '../config';

const initialState = {
    file: '',
    content: '',
    page: 1,
    firstIndex: 0,
    lastIndex: DEFAULT_WORDS,
};

const books = (state = initialState, action) => {
    switch(action.type) {
        case SET_CONTENT:
            return {
                ...state,
                content: action.data
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.data
            };
        case SET_FILE:
            return {
                ...state,
                file: action.data
            };
        case SET_INDEX:
            return {
                ...state,
                firstIndex: action.data[0],
                lastIndex: action.data[1]
            };
        default:
            return state;
    }
};

export default books;