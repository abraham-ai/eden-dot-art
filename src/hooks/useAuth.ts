import { useContext } from 'react';
import { AuthContext } from 'src/contexts/Auth0Context';

export const useAuth = () => useContext(AuthContext);
