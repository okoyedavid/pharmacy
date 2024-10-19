import { useDispatch } from "react-redux";
import { getUser } from "../../Store/userSlice";
import axios from "axios";
import toast from "react-hot-toast";

function useFetch() {
  const dispatch = useDispatch();

  async function FetchUser(id) {
    try {
      const res = await axios.get(
        `https://pharm-six.vercel.app/api/user?id=${id}`
      );
      dispatch(getUser(res.data));
    } catch (error) {
      console.log(error);
      toast.error("There was an error redirecting you please login");
    }
  }

  return FetchUser;
}

export default useFetch;
