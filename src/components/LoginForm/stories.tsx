import { Meta, Story } from '@storybook/react/types-6-0';
import { LoginForm, LoginFormProps } from '.';

export default {
  title: 'LoginForm',
  component: LoginForm,
} as Meta<LoginFormProps>;

export const Template: Story<LoginFormProps> = (args) => {
  return (
    <div>
      <LoginForm {...args} />
    </div>
  );
};
