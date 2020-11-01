type action = {
  type: string
  payload: any
}

type newState = {
  [x: string]: any
}

function appReducer(state: any, action: action) {
  let newState: newState = {}
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      newState.counter = state.counter + action.payload
      return { ...state, ...newState }
    case 'DECREMENT_COUNTER':
      newState.counter = state.counter - action.payload
      return { ...state, ...newState }
    default:
      return state
  }
}

export default function mainReducer(state: any, action: action) {
  // middleware goes here, i.e calling analytics service, etc.
  console.log(action)
  return {
    app: appReducer(state.app, action),
  }
}
