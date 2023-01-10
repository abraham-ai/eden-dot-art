// AUTH
import { IronSession } from 'iron-session'

// TYPES
import { AuthMode } from '../../src/models/types'

declare module 'iron-session' {
  interface IronSessionData {
    apiKeyToken?: string
    ethereumToken?: string
  }
}

export const getAuthToken = (authMode: AuthMode, session: IronSession) => {
  switch (authMode) {
    case 'apiKey':
      return session.apiKeyToken
    case 'ethereum':
      return session.ethereumToken
    default:
      throw new Error('Invalid auth mode')
  }
}
