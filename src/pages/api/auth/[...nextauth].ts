import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
type LoginResponse = {
  user: { _id: string; name: string };
  token: string;
};

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'Seu email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          if (!email || !password) return null;
          const login: Awaited<Promise<LoginResponse>> = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_LOGIN}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            },
          )
            .then((res) => res.json() as Promise<LoginResponse>)
            .then((json) => json);

          const {
            token,
            user: { _id, name },
          } = login;
          if (!token || !_id || !name) {
            return null;
          }
          return {
            token,
            name,
            email,
            id: _id,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = !!user;
      const actualDateInSeconds = Math.floor(Date.now() / 1000);
      const expirationDateInSeconds = Math.floor(7 * 24 * 60 * 60);

      if (isSignIn) {
        token.expiration = Math.floor(
          actualDateInSeconds + expirationDateInSeconds,
        );
        return {
          ...token,
          ...user,
        };
      } else {
        if (!token?.expiration) throw new Error('Login expirado');
        if (actualDateInSeconds > token.expiration)
          throw new Error('Login expirado');
      }
      return { ...token };
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        acessToken: token.token,
        user: {
          name: token.name,
          email: token.email,
          id: token.id,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },
});
