import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { KnowledgeCard, KnowledgeCardProps } from '.';

const props: KnowledgeCardProps = {
  icon: '',
  title: '',
  description: '',
};

describe('<KnowledgeCard />', () => {
  it('should render title', () => {
    renderTheme(<KnowledgeCard {...props} title="test" />);

    expect(screen.getByRole('heading', { name: 'test' })).toBeInTheDocument();
  });
  it('should render icon', () => {
    renderTheme(<KnowledgeCard {...props} icon="test" />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render description', () => {
    renderTheme(<KnowledgeCard {...props} description="test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  it('should not render', () => {
    renderTheme(<KnowledgeCard {...props} />);

    expect(screen.queryAllByRole('section')).toHaveLength(0);
  });
});
