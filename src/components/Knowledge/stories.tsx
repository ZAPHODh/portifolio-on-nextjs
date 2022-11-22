import { Meta, Story } from '@storybook/react/types-6-0';
import { Knowledge, KnowledgeProps } from '.';

export default {
  title: 'Knowledge',
  component: Knowledge,
} as Meta<KnowledgeProps>;

export const Template: Story<KnowledgeProps> = (args) => {
  return (
    <div>
      <Knowledge {...args} />
    </div>
  );
};
