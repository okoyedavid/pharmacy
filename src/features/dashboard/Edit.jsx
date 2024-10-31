import { useForm } from "react-hook-form";
import styles from "../../modules/Edit.module.css";
import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import { emailRegex } from "../../utils/constants";
import { selectUser } from "../../Store/userSlice";
import { useSelector } from "react-redux";

function Edit() {
  const state = useSelector(selectUser);
  const { name, email, currentLevel: level } = state.userInfo;

  const { register, formState, handleSubmit } = useForm({
    defaultValues: { name, email, level },
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

        <InputArea error={errors?.level?.message} label={"Level"}>
          <select
            placeholder={"which level are you in"}
            name={"level"}
            id="level"
            {...register("level", { required: "This field is required" })}
          >
            <option value="100lvl">100lvl</option>
            <option value="200lvl"> 200lvl</option>
            <option value="300lvl">300lvl</option>
            <option value="400lvl">400lvl</option>
            <option value="500lvl">500lvl</option>
          </select>
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
