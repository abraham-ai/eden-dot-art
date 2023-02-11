import React, { useContext } from 'react'

// CONTEXT
import AppContext from '@/components/AppContext/AppContext'

// ANTD
import { Switch } from 'antd'

// ICONS
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'

// THEME PROPS
const themeLabel = { inputProps: { 'aria-label': 'Switch demo' } }

export default function ThemeToggle() {
  const context = useContext(AppContext)
  const { setIsLightTheme } = context

  const onChange = (checked: boolean) => {
    checked ? setIsLightTheme(previousValue => !previousValue) : null
    // console.log(`switch to ${checked}`);
  }

  return (
    <Switch
      {...themeLabel}
      defaultChecked
      onChange={onChange}
      checkedChildren={
        <div style={{ marginTop: 2 }}>
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
