import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import { emailRegex } from "../../utils/constants";
import useAuth from "./useAuth";
import MiniSpinner from "../../ui/MiniSpinner";

function Login() {
  const { register, formState, reset, handleSubmit } = useForm();
  const { LoginUSer, isLogginIn } = useAuth();
  const { errors } = formState;

  function onSubmit(data) {
    LoginUSer(data, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputArea label={"Email"} error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          placeholder={"Please input your Email"}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: emailRegex,
              message: "Please input a valid email",
            },
          })}
        />
      </InputArea>

      <InputArea label={"Password"} error={errors?.password?.message}>
        <input
          type="password"
          name="password"
          placeholder={"please input your password"}
          {...register("password", {
            required: "This field is required",
          })}
        />
      </InputArea>

      <Button type={"primary"} variation={"medium"}>
        {isLogginIn ? <MiniSpinner /> : "Login"}
      </Button>
    </Form>
  );
}

export default Login;
