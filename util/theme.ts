let dark = false

export const isDarkThemeSet = () => dark

export const setDarkTheme = (val: string) => {
  localStorage.setItem('theme', val)
  if (val === 'dark') dark = true
  if (val === 'light') dark = false
}
