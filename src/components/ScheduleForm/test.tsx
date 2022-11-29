import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ScheduleForm, ScheduleFormProps } from '.';

const props: ScheduleFormProps = {
  errorMessage: 'any',
};

describe('<ScheduleForm />', () => {
  it('should render', () => {
    renderTheme(<ScheduleForm {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
