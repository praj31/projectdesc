let dark = false

export const isDarkThemeSet = () => dark

export const setDarkTheme = (val: string) => {
  localStorage.setItem('theme', val)
  if (val === 'dark') dark = true
  if (val === 'light') dark = false
}

export const setTheme = () => {
  const theme = localStorage.getItem('theme')
  if (!theme) {
    setDarkTheme('dark')
    document.body.classList.add('dark')
  }
  if (theme === 'dark') {
    setDarkTheme('dark')
    document.body.classList.add('dark')
  }
  if (theme === 'light') {
    setDarkTheme('light')
    document.body.classList.remove('dark')
  }
}
