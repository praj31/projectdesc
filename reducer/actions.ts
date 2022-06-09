import { ReducerStateType } from './state'

export enum ACTIONS {
  CHANGE_SECTION = 'change-header',
  TOGGLE_SIDEBAR = 'toggle-sidebar',
}

export interface Action<T, P> {
  type: T
  payload?: Partial<P>
}

export type ReducerActionType = Action<ACTIONS, ReducerStateType>
