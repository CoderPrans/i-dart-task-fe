import * as type from './types';

const initialState = {
    csvData: [],
    loading: false,
    error: null
};

export default function rootReducer(state = initialState, action)  {
    switch(action.type) {
    case type.GET_DATA_REQUESTED:
	return {
	    ...state,
	    loading: true,
	}
    case type.GET_DATA_SUCCESS:
	return {
	    ...state,
	    loading: false,
	    csvData: action.data
	}
    case type.GET_DATA_FAILED:
	return {
	    ...state,
	    loading: false,
	    error: action.message
	}
    default:
	return state;
    }
}
