import { Meta, Story } from '@storybook/react/types-6-0';
import { CrudExample, CrudExampleProps } from '.';

export default {
  title: 'CrudExample',
  component: CrudExample,
} as Meta<CrudExampleProps>;

export const Template: Story<CrudExampleProps> = (args) => {
  return (
    <div>
      <CrudExample {...args} />
    </div>
  );
};
