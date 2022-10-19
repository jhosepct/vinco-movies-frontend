import Button from ".";
import { RiUserLine, RiArrowDownSLine } from "react-icons/ri";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    background: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  variant: "primary",
  label: "Button",
  leftIcon: <RiUserLine />,
  rightIcon: <RiArrowDownSLine />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  variant: "primary",
  label: "Button",
  rightIcon: <RiArrowDownSLine />,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  variant: "primary",
  label: "Button",
  leftIcon: <RiUserLine />,
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary",
};

export const Ghost = Template.bind({});
Ghost.args = {
  label: "Button",
  variant: "ghost",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  variant: "disabled",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Default = Template.bind({});
Default.args = {
  size: "default",
  label: "Button",
};
