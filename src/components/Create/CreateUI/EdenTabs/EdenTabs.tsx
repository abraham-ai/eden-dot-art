import React from 'react'

// ANTD
import { Tabs } from 'antd'

// COMPONENTS
import GenerateTab from '@/components/Create/CreateUI/GenerateUI/GenerateUI'
import InterpolateTab from '@/components/Create/CreateUI/InterpolateUI/InterpolateUI'
import Real2RealTab from '@/components/Create/CreateUI/Real2RealUI/Real2RealUI'
import RemixTab from '@/components/Create/CreateUI/RemixUI/RemixUI'

const tabItems = [
  // {
  //   label: 'Authenticate',
  //   key: 'tab1',
  //   children: <AuthTab />,
  // },
  {
    label: 'Generate',
    key: 'tab1',
    children: <GenerateTab />,
  },
  {
    label: 'Remix',
    key: 'tab2',
    children: <RemixTab />,
  },
  {
    label: 'Interpolate',
    key: 'tab3',
    children: <InterpolateTab />,
  },
  {
    label: 'Real2Real',
    key: 'tab4',
    children: <Real2RealTab />,
  },
]

const EdenTabs = () => {
  return (
    <Tabs
      defaultActiveKey="tab1"
      items={tabItems}
      style={{ height: 300, paddingLeft: 30, paddingTop: 20 }}
    />
  )
}

export default EdenTabs
