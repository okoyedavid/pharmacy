import { useForm } from "react-hook-form";
import styles from "../../modules/Edit.module.css";
import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import { emailRegex } from "../../utils/constants";
import { GetUserInfo } from "../../hooks/getUserInfo";

function Edit() {
  const {
    user: {
      user_metadata: { email, level, name },
    },
  } = GetUserInfo();

  const { register, formState, handleSubmit } = useForm({
    defaultValues: { name, email, class: level },
  });
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
    const image = data.image[0];
    console.log(image);
  }

  return (
    <div className={styles.edit}>
      <h2>Edit profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputArea label={"Name"} error={errors?.name?.message}>
          <input
            name={"name"}
            placeholder={"input your name"}
            type={"text"}
            id="name"
            {...register("name", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea error={errors?.class?.message} label={"Level"}>
          <input
            name={"class"}
            placeholder={"which level are you in"}
            type={"number"}
            id="class"
            {...register("class", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea error={errors?.email?.message} label={"Email Address"}>
          <input
            name={"email"}
            type={"email"}
            id="email"
            placeholder={"fill in your email address"}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: emailRegex,
                message: "please input a valid email",
              },
            })}
          />
        </InputArea>

        <InputArea error={errors?.password?.message} label={"Your password"}>
          <input
            name={"password"}
            placeholder={"input your password"}
            type={"text"}
            id="password"
            {...register("password", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea label={"quote"}>
          <input
            name={"quote"}
            placeholder={"favorite quote"}
            type={"text"}
            id="quote"
            {...register("quote")}
          />
        </InputArea>

        <InputArea>
          <input
            className={styles.input}
            label={"New profile photo"}
            type={"file"}
            id="image"
            name="image"
            {...register("image")}
          />
        </InputArea>

        <Button type={"primary"} variation={"small"}>
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}

export default Edit;
