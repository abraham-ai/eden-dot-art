// COMPONENTS
import EthereumAuth from '@/components/Auth/EthereumAuth'

const Auth = ({ onModalCancel }) => {
  return (
    <div style={{ width: '100%' }}>
        <EthereumAuth onModalCancel={onModalCancel} />
    </div>
  )
}

export default Auth
