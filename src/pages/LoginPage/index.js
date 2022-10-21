import { Formik, Form } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { images } from "../../assets/images/home/homeImages";
import Button from "../../components/Button";
import { FormError } from "../../components/FormError";
import { FormInput } from "../../components/FormInput";
import Slides from "../../components/Slides";
import { useAuth } from "../../context/UserContext";
import * as Styled from "../Styles/index";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(null);

  const imgs = images;

  return (
    <Styled.AuthLayout>
      <Styled.Main>
        <Styled.Poster>
          <Slides images={imgs}>
            <Styled.Text
              ondragstart="return false"
              onselectstart="return false"
              oncontextmenu="return false"
            >
              Lorem ipsum dolor <span>sit amet</span> consectetur.
            </Styled.Text>
          </Slides>
        </Styled.Poster>
        <Styled.FormContainer>
          <Styled.Group>
            <h3>Welcome back</h3>
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur voluptate id libero perspiciatis! Neque laudantium
              fugiat obcaecati doloremque! Doloribus, quisquam? Perferendis
              dolorum dicta nemo cumque nisi nesciunt soluta ab placeat!...
            </h6>
          </Styled.Group>

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
                  <Styled.ShowPassword
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiFillEye size="20" />
                    ) : (
                      <AiFillEyeInvisible size="20" />
                    )}
                  </Styled.ShowPassword>
                }
              />
              {error && <FormError>{error}</FormError>}
              <Button variant="primary" label="Login" type="submit" />
              <Styled.Link>
                Don't have an account yet?{" "}
                <span onClick={() => navigate("/signup")}>Create it now</span>
              </Styled.Link>
            </Form>
          </Formik>
        </Styled.FormContainer>
      </Styled.Main>
    </Styled.AuthLayout>
  );
};
