import { ScheduleForm } from 'components/ScheduleForm';
import { LoginForm } from 'components/LoginForm';
import { useContext, useState } from 'react';
import { signIn } from 'next-auth/react';
import { LoginOrSchedule } from 'context/isLoginOrIsSquedule/Context';

export const Forms = () => {
  const { state, dispatch } = useContext(LoginOrSchedule);
  const [errorLogin, setErrorLogin] = useState('');
  const [errorSchedule, setErrorSchedule] = useState('');

  const handleLogin = async (email: string, password: string) => {
    if (!email || !password) {
      setErrorLogin('Preencha todos os campos');
      return;
    }
    const loginResponse = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (!loginResponse.ok) {
      setErrorLogin('Usuário ou senha inválidos');
      setTimeout(() => {
        setErrorLogin('');
      }, 10000);
      return;
    }
  };

  const handleSchedule = async (
    name: string,
    email: string,
    password: string,
    age: number,
  ) => {
    const scheduleResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_REGISTER}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, age }),
      },
    );
    if (!scheduleResponse.ok) {
      const getError = await scheduleResponse.text();
      getError.includes('E11000')
        ? setErrorSchedule('Email já cadastrado')
        : setErrorSchedule(getError);
      setTimeout(() => {
        setErrorSchedule('');
      }, 5000);
      return;
    }
    dispatch({ type: 'TRIGGER' });
    alert('Cadastrado com sucesso.Por favor, faça o login');
  };
  if (state.onOff)
    return (
      <ScheduleForm
        onScheduleSend={handleSchedule}
        errorMessage={errorSchedule}
      ></ScheduleForm>
    );
  return (
    <LoginForm onInputLogin={handleLogin} errorMessage={errorLogin}></LoginForm>
  );
};
