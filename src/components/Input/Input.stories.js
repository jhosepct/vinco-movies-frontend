import { Input } from ".";
import { RiUserLine, RiArrowDownSLine } from "react-icons/ri";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    colorHover: { control: "color" },
  },
};

const Template = (args) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  placeholder: "placeholder",
};
