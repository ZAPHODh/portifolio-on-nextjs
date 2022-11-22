import { Card } from 'components/Knowledge';

export const KnowledgeCardApi: Card[] = [
  {
    icon: ``,
    title: 'Front-End',
    description: 'Front-End',
    complete: {
      languages: [
        { name: 'Javascript', icon: '', confident: 90 },
        { name: 'ReactJs', icon: '', confident: 80 },
        { name: 'NextJs', icon: '', confident: 75 },
        { name: 'NextAuth', icon: '', confident: 70 },
        { name: 'Styled-Components', icon: '', confident: 85 },
        { name: 'Storybook', icon: '', confident: 70 },
        { name: 'Jest', icon: '', confident: 65 },
        { name: 'HTML e CSS', icon: '', confident: 90 },
      ],
    },
  },
  {
    icon: ``,
    title: 'Back-End',
    description: 'Back-End',
    complete: {
      languages: [
        { name: 'NodeJs', icon: '', confident: 95 },
        { name: 'Typescript', icon: '', confident: 75 },
        { name: 'Electron', icon: '', confident: 70 },
        { name: 'API Rest', icon: '', confident: 85 },
        {
          name: 'Banco de dados relacionais e não relacionais',
          icon: '',
          confident: 80,
        },
        { name: 'Serviços Cloud', icon: '', confident: 85 },
        { name: 'SocketIO', icon: '', confident: 70 },
      ],
    },
  },
];
