import { FC, useState, createContext, useEffect } from 'react'

// ANTD
import { ConfigProvider } from 'antd'

export const ThemeContext = createContext((_themeName: string): void => null)

const ThemeProviderWrapper: FC = props => {
  const [themeName, _setThemeName] = useState('NebulaFighterTheme')
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'NebulaFighterTheme'
    _setThemeName(curThemeName)
  }, [])

  const theme = themeName
  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ConfigProvider>
      <ThemeContext.Provider value={setThemeName}>
        <ConfigProvider theme={theme}>{props.children}</ConfigProvider>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default ThemeProviderWrapper
