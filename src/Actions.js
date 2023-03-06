import { combineReducers, createStore } from 'redux'

//action creator

export const setData = (jsonData) => {
  return {
    type: 'SEARCH_DATA',
    payload: jsonData,
  }
}

//reducers
const movieData = (
  movieDataList = {
    data: '',
  },
  action
) => {
  if (action.type === 'SEARCH_DATA') {
    return { data: action.payload }
  } else {
    return 'movieDataList'
  }
}

//Redux Store
const dataStore = combineReducers({
  movieData: movieData,
})

export const store = createStore(dataStore)

const action = setData()
store.dispatch(action)
console.log(store.getState())
