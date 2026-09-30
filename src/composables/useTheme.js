function setTheme(theme) {
  const root = document.documentElement
  root.classList.add('theme-transition')
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light')
  } else {
    root.removeAttribute('data-theme')
  }
  window.setTimeout(() => {
    root.classList.remove('theme-transition')
  }, 400)
}

export function useTheme() {
  function toggleTheme() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light'
    setTheme(isLight ? 'dark' : 'light')
  }
  return { toggleTheme }
}
