import { Meta, Story } from '@storybook/react/types-6-0';
import { ProjectCard, ProjectCardProps } from '.';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
} as Meta<ProjectCardProps>;

export const Template: Story<ProjectCardProps> = (args) => {
  return (
    <div>
      <ProjectCard {...args} />
    </div>
  );
};
