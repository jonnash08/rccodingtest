import { SET_CONTENT, SET_PAGE, SET_FILE, SET_INDEX } from './types';

export const setContent = (data) => ({ type: SET_CONTENT, data });
export const setPage = (data) => ({ type: SET_PAGE, data });
export const setFile = (data) => ({ type: SET_FILE, data });
export const setIndex = (data) => ({ type: SET_INDEX, data });
