import { Meta, Story } from '@storybook/react/types-6-0';
import { ScheduleForm, ScheduleFormProps } from '.';

export default {
  title: 'ScheduleForm',
  component: ScheduleForm,
} as Meta<ScheduleFormProps>;

export const Template: Story<ScheduleFormProps> = (args) => {
  return (
    <div>
      <ScheduleForm {...args} />
    </div>
  );
};
