import { Meta, Story } from '@storybook/react/types-6-0';
import { LoggedContent, LoggedContentProps } from '.';

export default {
  title: 'LoggedContent',
  component: LoggedContent,
} as Meta<LoggedContentProps>;

export const Template: Story<LoggedContentProps> = (args) => {
  return (
    <div>
      <LoggedContent {...args} />
    </div>
  );
};
