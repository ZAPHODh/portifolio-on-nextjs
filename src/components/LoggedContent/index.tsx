import { signOut, useSession } from 'next-auth/react';
import * as Styled from './styles';

export type LoggedContentProps = {
  message?: string;
};

export const LoggedContent = ({ message }: LoggedContentProps) => {
  const { data: session } = useSession();
  const handleLogout = async () => {
    await signOut({ redirect: false });
  };
  return (
    <Styled.Wrapper>
      <h2>Olá, {session.user.name}. Bem vindo!</h2>
      <p>
        Agora que está logado, poderíamos fazer várias coisas com a sua sessão.
        Mas por enquanto, isso é tudo.
      </p>
      <Styled.LogoutButton onClick={handleLogout}>Deslogar</Styled.LogoutButton>
    </Styled.Wrapper>
  );
};
