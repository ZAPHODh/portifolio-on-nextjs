import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Knowledge, KnowledgeProps } from '.';
import { Mock } from './Mock';

const props: KnowledgeProps = {
  KnowledgeCardFather: [],
};

describe('<Knowledge />', () => {
  it('should render the knowleads', () => {
    renderTheme(<Knowledge {...props} KnowledgeCardFather={Mock}></Knowledge>);

    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
