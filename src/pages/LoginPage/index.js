import styled from "@emotion/styled";

import { Formik, Form } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { typography } from "../../assets/typography";
import Button from "../../components/Button";
import { FormInput } from "../../components/FormInput";
const Main = styled.main`
  display: flex;
  gap: 83px;
  padding: 132px 120px 137px 318px;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & h3 {
    ${typography.regular.headline3}
  }
  & h6 {
    ${typography.regular.headline6}
  }
  & form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & button {
      align-self: flex-end;
      /* width: 80px; */
    }
  }
`;
const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AuthLayout = styled.div`
  display: grid;
  grid-template-rows: 64px auto;
  min-height: 100vh;
`;
const ShowPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <Main>
        <FormContainer>
          <Group>
            <h3>Welcome back</h3>
            <h6>Login to you account as...</h6>
          </Group>
          <Formik
            onSubmit={(credentials) => {
              console.log(credentials);
            }}
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
            })}
          >
            <Form>
              <FormInput
                label="EMAIL"
                name="email"
                type="email"
                placeholder="some.user@mail.com"
              />
              <FormInput
                label="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                rightIcon={
                  <ShowPassword onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <AiFillEye size="20" />
                    ) : (
                      <AiFillEyeInvisible size="20" />
                    )}
                  </ShowPassword>
                }
              />
              <Button type="submit">Login</Button>
            </Form>
          </Formik>
        </FormContainer>
      </Main>
    </AuthLayout>
  );
};
