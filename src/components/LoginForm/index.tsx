import { LoginOrSchedule } from 'context/isLoginOrIsSquedule/Context';
import { useContext, useState } from 'react';
import * as Styled from './styles';

export type LoginFormProps = {
  errorMessage?: string;
  onInputLogin?: (email: string, password: string) => Promise<void>;
};

export const LoginForm = ({ errorMessage, onInputLogin }: LoginFormProps) => {
  const { dispatch } = useContext(LoginOrSchedule);
  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitForm = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (onInputLogin) {
      await onInputLogin(email, password);
    }
    setLoading(false);
  };

  const handleSchedule = () => {
    dispatch({ type: 'TRIGGER' });
  };

  return (
    <Styled.Wrapper>
      <Styled.Wrapper>
        <h2>Amostra de formulário de Login</h2>
        <Styled.Form onSubmit={handleSubmitForm}>
          {!!errorMessage && (
            <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
          )}
          <Styled.InputWrapper>
            <Styled.InputText
              type="email"
              name="user-email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <Styled.InputLabel htmlFor="ser-email">Email</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputText
              type="password"
              name="user-password"
              onChange={(e) => {
                setPasswrod(e.target.value);
              }}
              value={password}
            />
            <Styled.InputLabel htmlFor="user-password">Senha</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.newUser onClick={handleSchedule}>
            ainda não tem cadastro? Cadastre-se agora!
          </Styled.newUser>
          <Styled.SubmitButton
            type="submit"
            value={loading ? 'Logando...' : 'Logar'}
            disabled={loading}
          />
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};
