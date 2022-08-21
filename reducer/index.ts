import Header from '../components/sections/Header'
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
    case 'handle-section-ipf':
      return {
        ...state,
        [action.payload.section]: {
          // @ts-ignore
          ...state[action.payload.section],
          [action.payload.property]: action.payload.value,
        },
      }
    case 'edit-arr-ipf':
      return {
        ...state,
        [action.payload.section]: {
          // @ts-ignore
          ...state[action.payload.section],
          [action.payload.property]: [
            // @ts-ignore
            ...state[action.payload.section][action.payload.property].slice(
              0,
              action.payload.index
            ),
            action.payload.value,
            // @ts-ignore
            ...state[action.payload.section][action.payload.property].slice(
              action.payload.index + 1
            ),
          ],
        },
      }
    case 'add-arr-ipf':
      return {
        ...state,
        [action.payload.section]: {
          // @ts-ignore
          ...state[action.payload.section],
          [action.payload.property]: [
            // @ts-ignore
            ...state[action.payload.section][action.payload.property],
            '',
          ],
        },
      }
    case 'del-arr-ipf':
      return {
        ...state,
        [action.payload.section]: {
          // @ts-ignore
          ...state[action.payload.section],
          [action.payload.property]: [
            // @ts-ignore
            ...state[action.payload.section][action.payload.property].slice(
              0,
              action.payload.index
            ),
            // @ts-ignore
            ...state[action.payload.section][action.payload.property].slice(
              action.payload.index + 1
            ),
          ],
        },
      }
    default:
      return state
  }
}
