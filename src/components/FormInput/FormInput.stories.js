import { Form, Formik } from "formik";
import { FormInput } from ".";
import { colors } from "../../assets/colors";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {
    background: { control: "color" },
    color: { control: "color" },
    colorHover: { control: "color" },
    colorText: { control: "color" },
  },
};

const Template = (args) => (
  <Formik
    initialValues={{
      name: "",
    }}
  >
    <Form>
      <FormInput {...args} />
    </Form>
  </Formik>
);
export const Primary = Template.bind({});
Primary.args = {
  name: "name",
  type: "text",
  label: "label",
  colorText: colors.black,
};

{
  /* <FormInput
  label="password"
  name="password"
  type={showPassword ? "text" : "password"}
  placeholder="********"
  rightIcon={
    <Styled.ShowPassword onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? (
        <AiFillEye size="20" />
      ) : (
        <AiFillEyeInvisible size="20" />
      )}
    </Styled.ShowPassword>
  }
/>; */
}

export const Password = Template.bind({});

Password.args = {
  name: "name",
  label: "password",
  type: "password",
  colorText: colors.black,
  rightIcon: <AiFillEyeInvisible size="20" />,
};

export const ShowPassword = Template.bind({});

ShowPassword.args = {
  name: "name",
  label: "password",
  type: "text",
  colorText: colors.black,
  rightIcon: <AiFillEye size="20" />,
};
