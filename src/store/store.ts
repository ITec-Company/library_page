import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { appReducer } from 'store/reducers'
import { contentTypeReducer } from 'store/reducers/content_type_reducer'
import { directionsReducer } from 'store/reducers/direction_reducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    directions: directionsReducer,
    contentType: contentTypeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
