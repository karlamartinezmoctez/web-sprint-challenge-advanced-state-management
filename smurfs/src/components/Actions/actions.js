import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('response', res.data)
        dispatch({type: FETCH_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err)
        dispatch({type: FETCH_ERROR, payload: err})
    })
}

export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';


export const postSmurfs = (smurf) => dispatch => {
    dispatch({type: POST_DATA});
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log('POST Response', res.data)
        dispatch({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err)
        dispatch({type: POST_ERROR, payload: err})
    })
}