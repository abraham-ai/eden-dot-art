// import react from 'react'

// REDUX
// import { useAppDispatch } from '@/hooks/hooks'

// ANTD
import { Switch } from 'antd'

// ICONS
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

  // THEME PROPS
  const themeLabel = { inputProps: { 'aria-label': 'Switch demo' } }

export default function ThemeToggle() {

	// const dispatch = useAppDispatch();

	const onChange = (checked: boolean) => {
		console.log(`switch to ${checked}`);
	};

	// const handleToggle = () => {
	// 	dispatch(setTheme((previousValue) => !previousValue ))
	// }

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