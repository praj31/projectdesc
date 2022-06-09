import { ACTIONS, ReducerActionType } from './actions'
import { ReducerStateType } from './state'

export const reducer = (
  state: ReducerStateType,
  action: ReducerActionType
): ReducerStateType => {
  switch (action.type) {
    case ACTIONS.CHANGE_SECTION:
      return { ...state, section: action.payload?.section! }
    case ACTIONS.TOGGLE_SIDEBAR:
      return { ...state, sidebarOpen: action.payload?.sidebarOpen! }
    default:
      return state
  }
}
