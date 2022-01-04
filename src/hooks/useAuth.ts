import { history } from 'umi';
import { useCallback } from 'react';

export default function useAuth() {
  const gotoLoginPage = useCallback(() => {
    history.push('/login');
  }, []);

  const login = useCallback(
    (values: { username: string; password: string }) => {},
    [],
  );

  const signup = useCallback(
    (values: { username: string; password: string; nickname?: string }) => {},
    [],
  );

  return {
    gotoLoginPage,
    login,
    signup,
  };
}
