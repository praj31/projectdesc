import { ACTIONS, ReducerAction } from './actions'
import { ReducerStateType } from './state'

export const reducer = (state: ReducerStateType, action: ReducerAction) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SECTION:
      return { ...state, section: action.payload }
    case ACTIONS.TOGGLE_SIDEBAR:
      return { ...state, sidebarOpen: action.payload }
    default:
      return state
  }
}
