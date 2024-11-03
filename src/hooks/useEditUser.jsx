import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../services/ApiAuth";

function useEditUser() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isLoading } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("user Info successfuly updated");
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("failed to update user info please try again");
    },
  });

  return { editUser, isLoading };
}

export default useEditUser;
