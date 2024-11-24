import { Controller, useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import InputArea from "../../../ui/InputArea";
import Levels from "../../../ui/levels";
import { useMemo } from "react";
import useEditUser from "../../../hooks/useEditUser";

import "react-datepicker/dist/react-datepicker.css";
import styles from "../../../modules/Edit.module.css";
import DatePicker from "react-datepicker";

function EditProfile({ userInfo }) {
  const { editUser, isLoading } = useEditUser();
  const {
    name,
    currentLevel: level,
    location,
    quote,
    dateofbirth: date,
    bio,
  } = userInfo;

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name,
      level,
      location,
      quote,
      bio,
      date,
    },
  });

  // Memoize initial user data to avoid unnecessary re-renders
  const initialValues = useMemo(
    () => ({
      name,
      level,
      location,
      quote,
      bio,
      date,
    }),
    [name, level, location, quote, bio, date]
  );

  const values = watch();
  const hasChanged = Object.keys(initialValues).some(
    (key) => values[key] !== initialValues[key]
  );

  function onSubmit(data) {
    editUser(data);
  }

  return (
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
        <Controller
          control={control}
          name="date"
          rules={{ required: "This field is required" }}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              className={`${styles.input} ${styles.datePicker}`}
              id="date"
              dateFormat="dd/MM/yyyy"
              selected={value}
              onChange={(date) => onChange(date)}
            />
          )}
        />
      </InputArea>

      <InputArea newClass={styles.textArea} label={"bio"}>
        <textarea
          name={"bio"}
          disabled={isLoading}
          placeholder={"tell us something about yourself"}
          id="bio"
          {...register("bio")}
        />
      </InputArea>

      {/* <InputArea label={"New profile photo"}>
            <input
              className={`${styles.input} ${styles.file}`}
              type={"file"}
              id="image"
              name="image"
              disabled={isLoading}
              {...register("image")}
            />
          </InputArea> */}

      <div className={styles.ctaContainer}>
        <Button gradient={"revert"} type="reset" variation={"medium"}>
          Cancel{" "}
        </Button>
        <Button
          disabled={!hasChanged || isLoading}
          gradient={"primary"}
          type="submit"
          variation={"medium"}
        >
          Submit{" "}
        </Button>
      </div>
    </form>
  );
}

export default EditProfile;
