export interface ReducerStateType {
  sidebarOpen: boolean
  activeSection: string
  header: {
    title: string
    subtitle: string
    logoURL: string
    githubUser: string
    githubRepo: string
    liveURL: string
  }
  description: {
    objective: string
    purpose: string
    audience: string
    features: string
  }
}

export const initialState: ReducerStateType = {
  sidebarOpen: false,
  activeSection: 'Header',
  header: {
    title: '',
    subtitle: '',
    logoURL: '',
    githubUser: '',
    githubRepo: '',
    liveURL: '',
  },
  description: {
    objective: '',
    purpose: '',
    audience: '',
    features: '',
  },
}
