export function dappReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    case 'SET_TEST_DATA':
      return { ...state.dapp, ...{ test: action.payload } }
    default:
      return state.dapp
  }
}

export default function mainReducer(state, action) {
  // middleware goes here, i.e calling analytics service, etc.
  // Service 1
  // Service 2

  // Finally return map of **ALL** stateObjects
  // stateObject: resulting state of a reducer function after passing in former state and action
  return {
    dapp: dappReducer(state, action),
    //anotherStateObject0: dappReducer(state, action),
    //anotherStateObject1: dappReducer(state, action)
  }
}
