import { configureStore } from '@reduxjs/toolkit'
import  ecomSlice  from './Slice'

export const store = configureStore({
  reducer: {
    data:ecomSlice
  },
})