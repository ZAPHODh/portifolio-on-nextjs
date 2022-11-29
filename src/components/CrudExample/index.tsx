// import * as Styled from './styles';
import { LoggedContent } from 'components/LoggedContent';
import { Forms } from 'components/Forms';
import { useSession } from 'next-auth/react';

export type CrudExampleProps = {
  string?: string;
};

export const CrudExample = ({ string }: CrudExampleProps) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'unauthenticated') {
    return <Forms />;
    //do the login and schedule form
  }
  if (status === 'authenticated') {
    return <LoggedContent />;
  }
};
