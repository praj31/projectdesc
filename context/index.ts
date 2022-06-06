import { createContext, Dispatch } from 'react'
import { initialState, ReducerAction, ReducerStateType } from '../reducer'

type ContextState = {
  state: ReducerStateType
  dispatch: Dispatch<ReducerAction>
}

export const StateContext = createContext<ContextState>({
  state: initialState,
  dispatch: () => undefined,
})
