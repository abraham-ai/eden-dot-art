// REDUX
import { useAppSelector } from '@/hooks/hooks'
// useAppDispatch

// COMPONENTS
import CreateUI from '@/components/Create/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/Create/CreateSignInJWT/CreateSignInJWT'
// import AppLogo from '@/components/AppLogo'

export default function AuthenticateButton({ onClose }) {
  const { isWeb3AuthSuccess } = useAppSelector(state => state.auth)
  const { isModalVisible } = useAppSelector(state => state.modal)

  return isWeb3AuthSuccess ? (
    <CreateUI isOpen={isModalVisible} />
  ) : (
    <CreateSignInJWT isOpen={isModalVisible} onClose={onClose} />
  )
}
