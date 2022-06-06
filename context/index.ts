import { createContext, Dispatch } from 'react'
import { ReducerAction } from '../reducer/actions'
import { ReducerStateType, initialState } from '../reducer/state'

type ContextState = {
  state: ReducerStateType
  dispatch: Dispatch<ReducerAction>
}

export const StateContext = createContext<ContextState>({
  state: initialState,
  dispatch: () => undefined,
})
