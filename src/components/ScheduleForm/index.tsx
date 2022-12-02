import { LoginOrSchedule } from 'context/isLoginOrIsSquedule/Context';
import React, { useContext, useState } from 'react';
import * as Styled from './styles';

export type ScheduleFormProps = {
  errorMessage?: string;
  onScheduleSend?: (
    name: string,
    email: string,
    password: string,
    age: number,
  ) => void;
};

export const ScheduleForm = ({
  errorMessage,
  onScheduleSend,
}: ScheduleFormProps) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    age: 0,
  });

  const { dispatch } = useContext(LoginOrSchedule);

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const { age, confirmPass, email, name, password } = form;
    if (!age || !confirmPass || !email || !name || !password) {
      alert('Um ou mais campos estão em branco');
      return;
    }
    if (confirmPass !== password) {
      alert('As senhas não batem');
      return;
    }
    setLoading(true);
    if (onScheduleSend) {
      await onScheduleSend(name, email, password, age);
    }

    setLoading(false);
    setForm({
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      age: 0,
    });
  };

  const handleLogin = () => {
    dispatch({ type: 'TRIGGER' });
  };
  return (
    <Styled.Wrapper>
      <Styled.Wrapper>
        <h2>Amostra de formulário de Cadastro</h2>
        <Styled.Form onSubmit={handleSubmitForm}>
          {!!errorMessage && (
            <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
          )}
          <Styled.InputWrapper>
            <Styled.InputText
              id="user-name"
              type="text"
              name="user-name"
              onChange={(e) => {
                setForm((f) => {
                  return { ...f, name: e.target.value };
                });
              }}
              value={form.name}
            />
            <Styled.InputLabel htmlFor="user-name">Nome</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputText
              id="user-email"
              type="email"
              name="user-email"
              onChange={(e) => {
                setForm((f) => {
                  return { ...f, email: e.target.value };
                });
              }}
              value={form.email}
            />
            <Styled.InputLabel htmlFor="user-email">Email</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputText
              id="user-age"
              type="number"
              name="user-age"
              onChange={(e) => {
                setForm((f) => {
                  return { ...f, age: Number(e.target.value) };
                });
              }}
              value={form.age === 0 ? '' : form.age}
            />
            <Styled.InputLabel htmlFor="user-age">Idade</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputText
              id="user-pássword"
              type="password"
              name="user-password"
              onChange={(e) => {
                setForm((f) => {
                  return { ...f, password: e.target.value };
                });
              }}
              value={form.password}
            />
            <Styled.InputLabel htmlFor="user-password">Senha</Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.InputText
              id="user-confirmPass"
              type="password"
              name="user-confirmPass"
              onChange={(e) => {
                setForm((f) => {
                  return { ...f, confirmPass: e.target.value };
                });
              }}
              value={form.confirmPass}
            />
            <Styled.InputLabel htmlFor="user-confirmPass">
              Confirme sua senha
            </Styled.InputLabel>
          </Styled.InputWrapper>
          <Styled.newUser onClick={handleLogin}>
            Já tem cadastro?? faça o login agora!
          </Styled.newUser>
          <Styled.SubmitButton
            type="submit"
            value={loading ? 'Cadastrando...' : 'Cadastrar'}
            disabled={loading}
          />
        </Styled.Form>
      </Styled.Wrapper>
    </Styled.Wrapper>
  );
};
