import create from 'zustand'
import Store from './state'

export const useStore = create<Store>()(() => ({
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
}))
