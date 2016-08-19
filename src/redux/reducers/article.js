import actionTypes from '../consts/article'
import typeToReducer from 'type-to-reducer'

export default typeToReducer({
  [`${actionTypes.ADD_ARTICLE}`]: {
    LOADING: () => ({}),
    ERROR: (state, action) => ({
      isRejected: true,
      error: action.payload
    }),
    SUCCESS: (state, action) => ({
      isFulfilled: true,
      data: action.payload
    })
  }
}, {})
