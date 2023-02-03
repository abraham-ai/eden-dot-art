import { FC, useState, createContext, useEffect } from 'react'
import { ThemeProvider } from '@mui/material'
import { themeCreator } from './base'

// ANTD
// import { ConfigProvider, theme } from 'antd'
import { ConfigProvider } from 'antd'
// const { defaultAlgorithm, darkAlgorithm } = theme;

export const ThemeContext = createContext((_themeName: string): void => null)

const ThemeProviderWrapper: FC = props => {
  const [themeName, _setThemeName] = useState('NebulaFighterTheme')
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const curThemeName =
      window.localStorage.getItem('appTheme') || 'NebulaFighterTheme'
    _setThemeName(curThemeName)
  }, [])

  const theme = themeCreator(themeName)
  const setThemeName = (themeName: string): void => {
    window.localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ConfigProvider>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </ConfigProvider>
  )
}

export default ThemeProviderWrapper
