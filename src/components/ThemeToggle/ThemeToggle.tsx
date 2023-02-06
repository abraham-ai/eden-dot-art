import React from 'react'

// REDUX
import { useAppDispatch } from '@/hooks/redux'
import { setTheme } from '@/redux/slices/themeSlice'

// ANTD
import { Switch } from 'antd'

// ICONS
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

  // THEME PROPS
  const themeLabel = { inputProps: { 'aria-label': 'Switch demo' } }

export default function ThemeToggle() {

	const dispatch = useAppDispatch();

	const onChange = (checked: boolean) => {
		checked 
			? 
				dispatch(setTheme((previousValue) => !previousValue ))
			: 
				null
		// console.log(`switch to ${checked}`);
	};

	return (
			<Switch 
				{...themeLabel}
				defaultChecked 
				onChange={onChange}
				checkedChildren={<div style={{ marginTop: 2 }}><BsSunFill /></div>}
				unCheckedChildren={<div><BsFillMoonFill /></div>}
			/>
	)
}