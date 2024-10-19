import { useForm } from "react-hook-form";
import styles from "../../modules/Edit.module.css";
import { useLoaderData } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function Edit() {
  const values = useLoaderData();

  const { register, formState, handleSubmit } = useForm({
    defaultValues: values,
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
        <Input
          name={"name"}
          placeholder={"input your name"}
          label={"Name"}
          type={"text"}
          id="name"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.name?.message}
        />

        <Input
          name={"class"}
          placeholder={"which level are you in"}
          label={"Level"}
          type={"number"}
          id="class"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.class?.message}
        />

        <Input
          label={"Email Address"}
          name={"email"}
          type={"email"}
          id="email"
          placeholder={"fill in your email address"}
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.email?.message}
        />

        <Input
          name={"password"}
          label={"Your password"}
          placeholder={"input your password"}
          type={"text"}
          id="password"
          register={register}
          rules={{ required: "This field is required" }}
          error={errors?.password?.message}
        />

        <Input
          name={"quote"}
          placeholder={"favorite quote"}
          label={"quote"}
          type={"text"}
          id="quote"
          register={register}
        />

        <Input
          className={styles.input}
          label={"New profile photo"}
          type={"file"}
          id="image"
          name="image"
          register={register}
        />

        <Button type={"primary"} variation={"small"}>
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}

export default Edit;

export async function loader() {
  const state = JSON.parse(localStorage.getItem("state"));
  const { userInfo, schoolInfo } = state;

  const values = {
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    class: schoolInfo.level,
    quote: "if lovebite they bring am abeg ",
  };

  return values;
}
