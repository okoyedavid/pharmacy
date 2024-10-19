import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styles from "../../modules/Login.module.css";
import axios from "axios";
import validateLogin from "../../services/validation";
import toast from "react-hot-toast";

function Login() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

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
          register={""}
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
          {isLoading ? "signing you in....." : "Login"}
        </Button>
      </Form>
    </div>
  );
}

export default Login;

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const password = formData.get("password");
  const errors = {};

  if (!name) errors.name = "please fill in your name";
  if (!password) errors.password = "please fill in your password";

  if (Object.keys(errors).length > 0) {
    toast.error("Please fill in the appropriate fields");
    return errors;
  }
  try {
    const response = await axios.get("https://pharm-six.vercel.app/api/user");
    const value = validateLogin(response.data, name, password);
    if (value) return redirect("/dashboard/user");
    else {
      errors.message = "invalid password or username please try again";
    }
  } catch (errors) {
    console.log(errors);
    toast.error("we encountered an error logging you in please try again");
  }

  return errors;
}

export function loader() {
  if (localStorage.getItem("state")) return redirect("/dashboard/user");

  return null;
}
