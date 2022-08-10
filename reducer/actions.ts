export type ACTIONS = 'toggle-sidebar' | 'change-section' | 'handle-header'

type ToggleSidebarAction = { type: 'toggle-sidebar'; payload: boolean }
type ChangeActiveSectionAction = {
  type: 'change-section'
  payload: string
}
type HandleHeaderAction = {
  type: 'handle-header'
  payload: { property: string; value: string }
}

export type ReducerActionType =
  | ToggleSidebarAction
  | ChangeActiveSectionAction
  | HandleHeaderAction
