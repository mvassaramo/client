/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash'
import {  
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types'


// object based approach 

export default (state= {}, action ) => {
  switch(action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_STREAM:
      // const newState = { ...state}
      // newState[action.payload.id] = action.payload
      // return newState

      // alternative approach (key interpolation) to above
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      return _.omit(state, action.payload) //omit is not going to change original state object; creates new object
    default:
      return state
  }
}





// Array based approach example below:

// const streamReducer = (state = [], action) => {
//   switch(action.type) {
//     case EDIT_STREAM: 
//       return state.map(stream => {
//         if (stream.id === action.payload.id) {
//           return action.payload
//         }
//         return stream
//       })
//     default:
//       return state
//   }
// }