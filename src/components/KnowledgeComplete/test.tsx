import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { KnowledgeComplete, KnowledgeCompleteProps } from '.';

const props: KnowledgeCompleteProps = {
  cardComplete: {},
};

describe('<KnowledgeComplete />', () => {
  it('should render', () => {
    renderTheme(<KnowledgeComplete {...props} />);

    expect(screen).toBeInTheDocument();
  });
});
