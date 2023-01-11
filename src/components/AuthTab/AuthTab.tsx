import { Divider } from 'antd'
// Button, Form, Input
import ApiKeyAuth from '@/components/AuthTab/ApiKeyAuth'
import AuthSelector from '@/components/AuthTab/AuthSelector'
import EthereumAuth from '@/components/AuthTab/EthereumAuth'

const AuthTab = () => {
  return (
    <>
      <AuthSelector />
      <Divider />
      <ApiKeyAuth />
      <Divider />
      <EthereumAuth />
    </>
  )
}

export default AuthTab
