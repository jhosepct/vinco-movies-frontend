import { ErrorMessage, useField } from "formik";
import { Input } from "../Input";
import { FormError } from "../FormError";
import { Container, Message } from "./styles";

export const FormInput = ({ label, caption, updateFile, ...props }) => {
  const [field] = useField({ ...props });
  return (
    <Container className={props.type}>
      <label htmlFor={props.name}>{label}</label>
      <Input {...field} name={props.name} {...props} />
      <Message>{caption}</Message>
      <ErrorMessage name={props.name} component={FormError} />
    </Container>
  );
};
