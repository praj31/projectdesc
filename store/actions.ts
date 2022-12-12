import { useStore } from '.'

const toggleSidebar = (open: boolean) =>
  useStore.setState((state) => ({ ...state, sidebarOpen: open }))

const changeActiveSection = (section: string) =>
  useStore.setState((state) => ({ ...state, activeSection: section }))

const handleSectionInputField = (
  section: string,
  property: string,
  value: string
) =>
  useStore.setState((state) => ({
    ...state,
    [section]: {
      // @ts-ignore
      ...state[section],
      [property]: value,
    },
  }))

const addArrayInputField = (section: string, property: string) =>
  useStore.setState((state) => ({
    ...state,
    [section]: {
      // @ts-ignore
      ...state[section],
      [property]: [
        // @ts-ignore
        ...state[section][property],
        '',
      ],
    },
  }))

const editArrayInputField = (
  section: string,
  property: string,
  value: string,
  index: number
) =>
  useStore.setState((state) => ({
    ...state,
    [section]: {
      // @ts-ignore
      ...state[section],
      [property]: [
        // @ts-ignore
        ...state[section][property].slice(0, index),
        value,
        // @ts-ignore
        ...state[section][property].slice(index + 1),
      ],
    },
  }))

const deleteArrayInputField = (
  section: string,
  property: string,
  index: number
) =>
  useStore.setState((state) => ({
    ...state,
    [section]: {
      // @ts-ignore
      ...state[section],
      [property]: [
        // @ts-ignore
        ...state[section][property].slice(0, index),
        // @ts-ignore
        ...state[section][property].slice(index + 1),
      ],
    },
  }))

const useStoreAction = {
  toggleSidebar,
  changeActiveSection,
  handleSectionInputField,
  addArrayInputField,
  editArrayInputField,
  deleteArrayInputField,
}

export default useStoreAction
