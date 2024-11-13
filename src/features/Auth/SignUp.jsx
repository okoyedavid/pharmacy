import { useForm } from "react-hook-form";
import { fetchConstantValue } from "../../utils/constants";
import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import Form from "../../ui/Form";
import useAuth from "./useAuth";

function SignUp() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { signUp, isCreatingUSer } = useAuth();
  const { errors, isSubmitting } = formState;
  const emailRegex = fetchConstantValue("email");
  const passwordRegex = fetchConstantValue("password");
  function onSubmit(data) {
    signUp(data, { onSettled: () => reset() });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputArea label={"Full Name"} error={errors?.name?.message}>
        <input
          type="text"
          id="name"
          placeholder={"Please input your full name"}
          {...register("name", { required: "This field is required" })}
        />
      </InputArea>
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
      <InputArea label="Level" error={errors?.level?.message}>
        <select
          id="level"
          {...register("level", { required: "Please select your level" })}
        >
          <option value="">Select your level</option>
          <option value="100">100 level</option>
          <option value="200">200 level</option>
          <option value="300">300 level</option>
          <option value="400">400 level</option>
          <option value="500">500 level</option>
        </select>
      </InputArea>

      <InputArea label={"Password"} error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          placeholder={"Please input your password"}
          {...register("password", {
            required: "This field is required",
            pattern: {
              value: passwordRegex,
              message:
                "Password must be a minimum of 8 characters, one uppercase letter, a number, and contain a special character",
            },
          })}
        />
      </InputArea>

      <Button
        gradient={"primary"}
        variation={"medium"}
        disabled={isCreatingUSer || isSubmitting}
      >
        {isCreatingUSer ? "Creating your account..." : "Create Account"}
      </Button>
    </Form>
  );
}

export default SignUp;
