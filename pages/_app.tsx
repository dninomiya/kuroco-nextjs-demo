import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Box, Container, Stack } from '@mui/material';
import Header from '../components/header';
import { AuthProvider } from '../context/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Stack direction="column" spacing={5}>
        <Header />
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </Box>
      </Stack>
    </AuthProvider>
  );
}

export default MyApp;
