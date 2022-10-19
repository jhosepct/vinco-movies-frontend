import styled from "@emotion/styled";

import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import { typography } from "../../assets/typography";
import Button from "../../components/Button";
import { FormError } from "../../components/FormError";
import { FormInput } from "../../components/FormInput";
import { useAuth } from "../../context/UserContext";
const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  padding: 126px 100px 100px 100px !important;
  & h3 {
    ${typography.regular.headline3}
  }
  & h6 {
    ${typography.regular.headline6}
  }
  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & button {
    width: 100%;
    align-self: center;
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

const Poster = styled.div`
  max-width: 50%;
`;

export const LoginPage = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(null);

  return (
    <AuthLayout>
      <Main>
        <Poster>
          <img
            src="https://aliados.rappi.com/static/media/imagen_2_tabletland.c7186827.png"
            alt=""
          />
        </Poster>
        <FormContainer>
          <Group>
            <h3>Welcome back</h3>
            <h6>Login to you account as...</h6>
          </Group>

          <Formik
            onSubmit={(credentials) => {
              login(credentials).catch((error) => {
                setError(error.response.data.message);
              });
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
              {error && <FormError>{error}</FormError>}
              <Button variant="primary" label="Login" type="submit" />
            </Form>
          </Formik>
        </FormContainer>
      </Main>
    </AuthLayout>
  );
};
