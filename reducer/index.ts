export const ACTIONS = {
  CHANGE_SECTION: 'change-section',
}

export const initialState = {
  section: 'Header',
}

export type ReducerStateType = typeof initialState

export type ReducerAction = {
  type: string
  payload: any
}

export const reducer = (state: ReducerStateType, action: ReducerAction) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SECTION:
      return { ...state, section: action.payload }
    default:
      return state
  }
}
