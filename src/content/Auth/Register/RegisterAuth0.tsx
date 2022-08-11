import { FC } from 'react';
import { useState } from 'react';
import { Button, Box, Alert, styled } from '@mui/material';
import { useAuth } from 'src/hooks/useAuth';
import { useRefMounted } from 'src/hooks/useRefMounted';
import { useRouter } from 'next/router';

const ImgWrapper = styled('img')(
  ({ theme }) => `
    margin-right: ${theme.spacing(1)};
    width: 32px;
`
);

export const RegisterAuth0: FC = (props) => {
  const { loginWithPopup } = useAuth() as any;
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRefMounted();
  const router = useRouter();

  const handleRegister = async (): Promise<void> => {
    try {
      await loginWithPopup();

      if (isMountedRef()) {
        const backTo = (router.query.backTo as string) || '/home/home';
        router.push(backTo);
      }
    } catch (err) {
      console.error(err);

      if (isMountedRef()) {
        setError(err.message);
      }
    }
  };

  return (
    <Box {...props}>
      {error && <Alert severity="error">{error}</Alert>}

      <Button
        fullWidth
        onClick={handleRegister}
        size="large"
        sx={{
          py: 2
        }}
        variant="outlined"
      >
        <ImgWrapper alt="Auth0" src="/static/images/logo/auth0.svg" />
        {'Sign in with'} Auth0
      </Button>
    </Box>
  );
};
