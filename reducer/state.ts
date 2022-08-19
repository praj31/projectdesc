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
    scope: string
    challenge: string
    features: string[]
  }
  roles: {
    people: string[]
  }
  builtwith: {
    stack: string[]
  }
  screenshots: {
    images: string[]
  }
  contact: {
    email: string
    twitter: string
    linkedin: string
    instagram: string
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
    scope: '',
    challenge: '',
    features: [''],
  },
  roles: {
    people: [''],
  },
  builtwith: {
    stack: [''],
  },
  screenshots: {
    images: [''],
  },
  contact: {
    email: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  },
}
