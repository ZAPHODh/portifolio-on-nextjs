import { Story } from '@storybook/react/types-6-0';
import { Forms } from '.';

export default {
  errorMessage: 'Forms',
  component: Forms,
};

export const Template: Story = (args) => {
  return (
    <div>
      <Forms {...args} />
    </div>
  );
};
