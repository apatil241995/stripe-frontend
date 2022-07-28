import productReduser from './reducer'
import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

const store = configureStore(
  {
    reducer: {
      product: productReduser
    }
  }, applyMiddleware(thunk)
)

export default (store)