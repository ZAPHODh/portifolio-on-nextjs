import { Meta, Story } from '@storybook/react/types-6-0';
import { Projects, ProjectsProps } from '.';

export default {
  title: 'Projects',
  component: Projects,
} as Meta<ProjectsProps>;

export const Template: Story<ProjectsProps> = (args) => {
  return (
    <div>
      <Projects {...args} />
    </div>
  );
};
