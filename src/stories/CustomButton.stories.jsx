import CustomButton from '../components/Button/CustomButton';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    label: {
      control: 'text',
    },
  },
};

// Template for all stories
const Template = (args) => <CustomButton {...args} />;

// Primary variant
export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  label: 'Primary Button',
};

// Secondary variant
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'contained',
  color: 'secondary',
  label: 'Secondary Button',
};

// Outlined variant
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  color: 'primary',
  label: 'Outlined Button',
};

// Text variant
export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  color: 'primary',
  label: 'Text Button',
};

// Small size
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small Button',
};

// Large size
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large Button',
};
