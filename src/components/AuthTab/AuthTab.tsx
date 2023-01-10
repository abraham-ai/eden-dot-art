import { Button, Divider, Form, Input } from 'antd'
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
