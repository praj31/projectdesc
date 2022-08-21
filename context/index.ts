import { createContext, Dispatch } from 'react'
import { ReducerActionType } from '../reducer/actions'
import { initialState, ReducerStateType } from '../reducer/state'

interface ContextState {
  state: ReducerStateType
  dispatch: Dispatch<ReducerActionType>
}

const intitalContext: ContextState = {
  state: initialState,
  dispatch: (value: ReducerActionType) => undefined,
}

export const StateContext = createContext<ContextState>(intitalContext)
