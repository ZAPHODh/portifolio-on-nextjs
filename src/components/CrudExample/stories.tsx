import { Story } from '@storybook/react/types-6-0';
import { CrudExample } from '.';

export default {
  title: 'CrudExample',
  component: CrudExample,
};

export const Template: Story = (args) => {
  return (
    <div>
      <CrudExample {...args} />
    </div>
  );
};
