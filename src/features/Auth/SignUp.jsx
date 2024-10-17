import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styles from "../../modules/Login.module.css";
import toast from "react-hot-toast";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { AddUser, createUser } from "../../services/helper";

function SignUp() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "submitting";

  const FetchUser = useFetch();

  useEffect(() => {
    if (formErrors?.success && formErrors?.id) {
      toast.success("Account created successfully");
      FetchUser(formErrors.id);
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
          placeholder={"Please input your username"}
          error={formErrors?.name}
        />
        <Input
          label={"Email"}
          type="email"
          name="Email"
          placeholder={"Please input your Email"}
          error={formErrors?.email}
        />
        <Input
          label={"Class"}
          type="number"
          name="class"
          placeholder={"Which level are you ?"}
          error={formErrors?.class}
        />
        <Input
          label={"Password"}
          type="password"
          name="password"
          placeholder={"please input your password"}
          error={formErrors?.password || formErrors?.message}
        />

        <Button>
          {isLoading ? "creating your account....." : "Create Account"}
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;

export async function action({ request }) {
  const formData = await request.formData();
  const { body, errors } = createUser(formData);
  if (Object.keys(errors).length > 0) {
    toast.error("please fill in all fields");
    return errors;
  }

  const value = AddUser(body);
  if (value) return { success: true, id: body.id };

  return errors;
}

export function loader() {
  if (localStorage.getItem("state")) return redirect("/dashboard/user");

  return null;
}
