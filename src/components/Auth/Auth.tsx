import { useState, ReactNode, SyntheticEvent } from 'react'

// MUI
import { Box, Tab, Tabs, Typography } from '@mui/material'

// COMPONENTS
import ApiKeyAuth from '@/components/Auth/ApiKeyAuth'
// import AuthSelector from '@/components/Auth/AuthSelector'
import EthereumAuth from '@/components/Auth/EthereumAuth'

// TYPES
interface TabPanelProps {
  children?: ReactNode
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  }
}

const Auth = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event ? setValue(newValue) : null
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Ethereum Auth" {...a11yProps(0)} />
          <Tab label="API Key Auth" {...a11yProps(1)} />
          {/* <Tab label="Auth Selector" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <EthereumAuth />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ApiKeyAuth />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <AuthSelector />
      </TabPanel> */}
    </Box>
  )
}

export default Auth
