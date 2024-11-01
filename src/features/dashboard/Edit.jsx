import { useForm } from "react-hook-form";
import styles from "../../modules/Edit.module.css";
import Button from "../../ui/Button";
import InputArea from "../../ui/InputArea";
import { emailRegex } from "../../utils/constants";
import { selectUser, updateUserInfo } from "../../Store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Levels from "../../ui/levels";

function Edit() {
  const dispatch = useDispatch();
  const state = useSelector(selectUser);
  const { name, email, currentLevel: level } = state.userInfo;

  const { register, formState, handleSubmit } = useForm({
    defaultValues: { name, email, level },
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = data.image[0];
    const finalData = data.image.length > 0 ? { ...data, image } : { ...data };

    dispatch(updateUserInfo(finalData));
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
            id="quote"
            {...register("quote")}
          />
        </InputArea>

        <InputArea label={"Date of birth"} error={errors?.date?.message}>
          <input
            className={styles.input}
            placeholder={"date of birth"}
            id="date"
            {...register("date", { required: "This field is required" })}
          />
        </InputArea>

        <InputArea label={"bio"}>
          <textarea
            name={"bio"}
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
