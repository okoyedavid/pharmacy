import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import styles from "../../modules/Login.module.css";

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
