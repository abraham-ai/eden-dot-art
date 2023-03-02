import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/context/AppContext/AppContext'

// ANTD
import { Switch } from 'antd'

// ICONS
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

// THEME PROPS
const themeLabel = { inputProps: { 'aria-label': 'Switch demo' } }

export default function ThemeToggle() {
  const context = useContext(AppContext)
  const { setIsLightTheme, isLightTheme } = context

  const onChange = e => {
    e.preventDefault()
    e ? setIsLightTheme(!isLightTheme) : null
    // console.log(`switch to ${checked}`);
  }

  return (
    <Switch
      {...themeLabel}
      defaultChecked
      onChange={e => onChange(e)}
      checkedChildren={
        <div style={{ marginTop: 20 }}>
          <BsSunFill />
        </div>
      }
      unCheckedChildren={
        <div>
          <BsFillMoonFill />
        </div>
      }
    />
  )
}
