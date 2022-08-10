import { ReducerActionType } from './actions'
import { ReducerStateType } from './state'

export const reducer = (
  state: ReducerStateType,
  action: ReducerActionType
): ReducerStateType => {
  switch (action.type) {
    case 'change-section':
      return { ...state, activeSection: action.payload }
    case 'toggle-sidebar':
      return { ...state, sidebarOpen: action.payload }
    case 'handle-header':
      return {
        ...state,
        header: {
          ...state.header,
          [action.payload.property]: action.payload.value,
        },
      }
    default:
      return state
  }
}
