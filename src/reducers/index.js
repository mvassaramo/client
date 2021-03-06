import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import authReducer from './authReducer'
import streamReducer from './streamReducer'

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer, //key has to be called form
  streams: streamReducer
})