import { useDispatch } from "react-redux";
import { getUser } from "../Store/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { userUrl } from "../services/api";

function useFetch() {
  const dispatch = useDispatch();

  async function FetchUser(id) {
    try {
      const res = await axios.get(`${userUrl}?id=${id}`);

      dispatch(getUser(res.data));
      localStorage.setItem("state", JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
      toast.error("There was an error redirecting you please login");
    }
  }

  return FetchUser;
}

export default useFetch;
