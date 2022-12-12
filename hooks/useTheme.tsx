import { useState } from 'react'

export const useTheme = () => {
  const themeKeyName = 'pd_them'
  const [theme, setTheme] = useState('dark')

  const setPreferredTheme = () => {
    const preference = localStorage.getItem(themeKeyName)
    if (!preference) {
      setTheme('dark')
      localStorage.setItem(themeKeyName, 'dark')
      document.body.classList.add('dark')
      document.documentElement.setAttribute('data-color-scheme', 'dark')
    } else {
      if (preference === 'dark') {
        setTheme('dark')
        document.body.classList.add('dark')
        document.documentElement.setAttribute('data-color-scheme', 'dark')
      } else {
        setTheme('light')
        document.body.classList.remove('dark')
        document.documentElement.setAttribute('data-color-scheme', 'light')
      }
    }
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem(themeKeyName, 'light')
      document.body.classList.remove('dark')
      document.documentElement.setAttribute('data-color-scheme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem(themeKeyName, 'dark')
      document.body.classList.add('dark')
      document.documentElement.setAttribute('data-color-scheme', 'dark')
    }
  }

  return { theme, setPreferredTheme, toggleTheme }
}
