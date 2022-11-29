import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { Session } from 'next-auth';
import {
  SessionProvider as NextAuthProvider,
  // useSession,
} from 'next-auth/react';

import '../../public/assets/fonts/styles.css';
import { GlobalStyles } from '../styles/global-styles';

// type AuthTypeProps = {
//   children: React.ReactElement<JSX.Element>;
// };

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <NextAuthProvider session={session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </NextAuthProvider>
  );
}
// function Auth({ children }: AuthTypeProps) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true });

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   return children;
// }

export default MyApp;
