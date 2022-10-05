import { ThemeOptions } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    bg: {
      main: string
    }
  }
  interface ThemeOptions {
    bg: {
      main: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PaletteColor
  }

  interface PaletterOptions {
    neutral?: PalleteColorOptions
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }
}

export default ThemeOptions
