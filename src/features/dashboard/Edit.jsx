import { useMemo } from "react";
import { useForm } from "react-hook-form";
import styles from "../../modules/Edit.module.css";
import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import { fetchConstantValue } from "../../utils/constants";
import { selectUser } from "../../Store/userSlice";
import { useSelector } from "react-redux";
import Levels from "../../ui/levels";
import useEditUser from "../../hooks/useEditUser";

function Edit() {
  const emailRegex = fetchConstantValue("email");
  const { editUser, isLoading } = useEditUser();
  const state = useSelector(selectUser);
  const {
    name,
    email,
    currentLevel: level,
    location,
    quote,
    dateofbirth: date,
    bio,
  } = state.userInfo;

  const { register, formState, handleSubmit, watch } = useForm({
    defaultValues: {
      name,
      email,
      level,
      location,
      quote,
      bio,
      date,
    },
  });
  const { errors } = formState;

  // Memoize initial user data to avoid unnecessary re-renders
  const initialValues = useMemo(
    () => ({
      name,
      email,
      level,
      location,
      quote,
      bio,
      date,
    }),
    [name, email, level, location, quote, bio, date]
  );

  const values = watch();
  const hasChanged = Object.keys(initialValues).some(
    (key) => values[key] !== initialValues[key]
  );

  function onSubmit(data) {
    if (hasChanged) {
      editUser(data);
    } else {
      console.log("No changes made");
    }
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
          <Levels register={register} />
        </InputArea>

        <InputArea error={errors?.email?.message} label={"Email Address"}>
          <input
            name={"email"}
            type={"email"}
            id="email"
            disabled
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

        <InputArea
          error={errors?.location?.message}
          label={"Your current address"}
        >
          <input
            name={"location"}
            disabled={isLoading}
            placeholder={"input your address"}
            type={"text"}
            id="location"
            {...register("location", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea label={"quote"}>
          <input
            name={"quote"}
            placeholder={"favorite quote"}
            type={"text"}
            disabled={isLoading}
            id="quote"
            {...register("quote")}
          />
        </InputArea>

        <InputArea label={"Date of birth"} error={errors?.date?.message}>
          <input
            className={styles.input}
            placeholder={"date of birth"}
            id="date"
            disabled={isLoading}
            {...register("date", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea label={"bio"}>
          <textarea
            name={"bio"}
            disabled={isLoading}
            placeholder={"tell us something about yourself"}
            id="bio"
            {...register("bio")}
          />
        </InputArea>

        <InputArea label={"New profile photo"}>
          <input
            className={`${styles.input} ${styles.file}`}
            type={"file"}
            id="image"
            name="image"
            disabled={isLoading}
            {...register("image")}
          />
        </InputArea>

        <Button
          disabled={!hasChanged || isLoading}
          type={"primary"}
          variation={"small"}
        >
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}

export default Edit;
