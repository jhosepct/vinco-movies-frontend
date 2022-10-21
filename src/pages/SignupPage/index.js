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

function SignupPage() {
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
            <h3>Sign Up</h3>
          </Styled.Group>

          <Formik
            onSubmit={(credentials) => {
              signup(credentials).catch((error) => {
                setError(error.response.data.message);
              });
            }}
            initialValues={{
              email: "",
              password: "",
              name: "",
              last_name: "",
              phone: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string()
                .required("Password is required")
                .min(6, "Password must be at least 6 characters"),
              name: Yup.string().required("Name is required"),
              last_name: Yup.string().required("Last name is required"),
              phone: Yup.string().required("Phone is required"),
            })}
          >
            <Form>
              <FormInput
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
              />
              <FormInput
                label="Last name"
                name="last_name"
                type="text"
                placeholder="Your last name"
              />
              <FormInput
                label="Phone"
                name="phone"
                type="phone"
                placeholder="987 654 321"
              />
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
              <Button variant="primary" label="Create account" type="submit" />
              <Styled.Link>
                do have an account yet?{" "}
                <span onClick={() => navigate("/login")}>Log in</span>
              </Styled.Link>
            </Form>
          </Formik>
        </Styled.FormContainer>
      </Styled.Main>
    </Styled.AuthLayout>
  );
}

export default SignupPage;
