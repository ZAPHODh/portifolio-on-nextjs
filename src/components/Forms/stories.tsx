import { Meta, Story } from '@storybook/react/types-6-0';
import { Forms, FormsProps } from '.';

export default {
  errorMessage: 'Forms',
  component: Forms,
} as Meta<FormsProps>;

export const Template: Story<FormsProps> = (args) => {
  return (
    <div>
      <Forms {...args} />
    </div>
  );
};
