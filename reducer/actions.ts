export type ACTIONS =
  | 'toggle-sidebar'
  | 'change-section'
  | 'handle-section-ipf'
  | 'handle-arr-ipf'
  | 'add-arr-ipf'
  | 'del-arr-ipf'

type ToggleSidebarAction = { type: 'toggle-sidebar'; payload: boolean }
type ChangeActiveSectionAction = {
  type: 'change-section'
  payload: string
}
type HandleSectionInputFieldAction = {
  type: 'handle-section-ipf'
  payload: { section: string; property: string; value: string }
}
type EditArrayInputFieldAction = {
  type: 'edit-arr-ipf'
  payload: { section: string; property: string; value: string; index: number }
}
type AddArrayInputFieldAction = {
  type: 'add-arr-ipf'
  payload: { section: string; property: string }
}
type DeleteArrayInputFieldAction = {
  type: 'del-arr-ipf'
  payload: { section: string; property: string; index: number }
}

export type ReducerActionType =
  | ToggleSidebarAction
  | ChangeActiveSectionAction
  | HandleSectionInputFieldAction
  | EditArrayInputFieldAction
  | AddArrayInputFieldAction
  | DeleteArrayInputFieldAction
