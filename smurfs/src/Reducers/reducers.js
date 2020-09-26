import {FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR, 
    POST_DATA, POST_SUCCESS, POST_ERROR} from '../actions'
    
    const initialState = {
        smurfs: [],
        isFetching: false,
        isPosting: false,
        error: ''
        
    }
    
    export const reducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_DATA: 
            return {
                ...state, isFetching: true
            }
    
            case FETCH_SUCCESS:
                return {
                ...state, 
                isFetching: false, 
                smurfs: action.payload
            }
    
            case FETCH_ERROR: 
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
    
            case POST_DATA: 
            return {
                ...state, isPosting: true, smurfs: [...state.smurfs]
            }
    
            case POST_SUCCESS:
                return {
                    ...state, 
                    isPosting: false, 
                    smurfs: action.payload
            }
    
            case POST_ERROR: 
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
    
            default: return state
        }
    }
    
    export default reducer;