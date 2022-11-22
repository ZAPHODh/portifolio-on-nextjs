import { Meta, Story } from '@storybook/react/types-6-0';
import { KnowledgeComplete, KnowledgeCompleteProps } from '.';

export default {
  title: 'KnowledgeComplete',
  component: KnowledgeComplete,
} as Meta<KnowledgeCompleteProps>;

export const Template: Story<KnowledgeCompleteProps> = (args) => {
  return (
    <div>
      <KnowledgeComplete {...args} />
    </div>
  );
};
