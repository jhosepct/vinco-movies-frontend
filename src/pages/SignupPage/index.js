import { Formik, Form } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import Button from "../../components/Button";
import { FormError } from "../../components/FormError";
import { FormInput } from "../../components/FormInput";
import { useAuth } from "../../context/UserContext";
import * as Styled from "../Styles/index";

function SignupPage() {
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState(null);
  console.log("Error");
  return (
    <Styled.AuthLayout>
      <Styled.Main>
        <Styled.Poster>
          <img
            src="https://aliados.rappi.com/static/media/imagen_2_tabletland.c7186827.png"
            alt=""
          />
        </Styled.Poster>
        <Styled.FormContainer>
          <Styled.Group>
            <h3>Sign Up</h3>
            <h6>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              blanditiis illo qui rem nobis possimus iusto dolores, iure, unde
              quasi quia, animi assumenda accusantium modi recusandae quos?
              Animi, vitae optio?...
            </h6>
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
              <Button variant="primary" label="Create" type="submit" />
            </Form>
          </Formik>
        </Styled.FormContainer>
      </Styled.Main>
    </Styled.AuthLayout>
  );
}

export default SignupPage;
