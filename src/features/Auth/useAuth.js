import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signupUser, login } from "../../services/ApiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signUp, isLoading: isCreatingUSer } = useMutation({
    mutationFn: (data) => signupUser(data),
    onSuccess: () => {
      toast.success(
        "Account created successfully! please verify your email account"
      );

      navigate("/login");
    },

    onError: () => {
      toast.error(
        "There was an error while creating your account please try again"
      );
    },
  });

  const { mutate: LoginUSer, isLoading: isLogginIn } = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
      navigate("/dashboard/user");
    },

    onError: (err) => {
      console.error("ERROR", err.message);
      toast.error("Provided Email or password is incorrect");
    },
  });

  return { signUp, isCreatingUSer, LoginUSer, isLogginIn };
}

export default useAuth;
