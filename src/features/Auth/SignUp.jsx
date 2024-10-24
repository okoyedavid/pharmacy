import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styles from "../../modules/Login.module.css";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

function SignUp() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "submitting";

  const FetchUser = useFetch();

  useEffect(() => {
    if (formErrors?.success && formErrors?.id) {
      toast.success("Account created successfully");
      FetchUser(formErrors?.id);
      setTimeout(() => {
        navigate("/dashboard/user");
      }, 3000);
    }
  }, [formErrors, navigate, FetchUser]);

  return (
    <div className={styles.login}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <Form method="POST">
        <Input
          label={"username"}
          type="text"
          name="name"
          register={""}
          placeholder={"Please input your username"}
          error={formErrors?.name}
        />
        <Input
          label={"Email"}
          type="email"
          register={""}
          name="Email"
          placeholder={"Please input your Email"}
          error={formErrors?.email}
        />
        <Input
          label={"Class"}
          type="number"
          name="class"
          register={""}
          placeholder={"Which level are you ?"}
          error={formErrors?.class}
        />
        <Input
          label={"Password"}
          type="password"
          name="password"
          register={""}
          placeholder={"please input your password"}
          error={formErrors?.password || formErrors?.message}
        />

        <Button type={"primary"} variation={"medium"}>
          {isLoading ? "creating your account....." : "Create Account"}
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
