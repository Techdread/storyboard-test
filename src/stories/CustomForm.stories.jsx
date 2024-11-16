import CustomForm from '../components/Form/CustomForm';

export default {
  title: 'Components/CustomForm',
  component: CustomForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    spacing: {
      control: 'number',
      description: 'Spacing between form elements',
      defaultValue: 3,
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback fired when the form is submitted',
    },
  },
};

// Template for all stories
const Template = (args) => <CustomForm {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  spacing: 3,
};

// Compact layout
export const CompactLayout = Template.bind({});
CompactLayout.args = {
  spacing: 1,
};

// With custom submit handler
export const WithSubmitHandler = Template.bind({});
WithSubmitHandler.args = {
  spacing: 3,
  onSubmit: (data) => {
    console.log('Form submitted with data:', data);
    alert('Form submitted! Check console for data.');
  },
};
