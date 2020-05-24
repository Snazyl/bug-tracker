import { SET_LOADING, GET_TECHS, TECHS_ERROR, DELETE_TECH, ADD_TECH } from '../actions/types';

const initialState = {
    techs: null,
    loading: false,
    errors: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            }
        case TECHS_ERROR:
            return {
                ...state,
                errors: action.payload,
                loading: false
            }
        default:
            return state;
    }
}