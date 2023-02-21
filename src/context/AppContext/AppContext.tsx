import { createContext } from 'react'
import { AppContext } from '@/interfaces/AppContext'

const AppContext = createContext<AppContext | null>(null)

export default AppContext
