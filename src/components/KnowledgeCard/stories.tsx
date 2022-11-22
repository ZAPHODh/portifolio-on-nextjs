import { Meta, Story } from '@storybook/react/types-6-0';
import { KnowledgeCard, KnowledgeCardProps } from '.';

export default {
  title: 'KnowledgeCard',
  component: KnowledgeCard,
} as Meta<KnowledgeCardProps>;

export const Template: Story<KnowledgeCardProps> = (args) => {
  return (
    <div>
      <KnowledgeCard {...args} />
    </div>
  );
};
