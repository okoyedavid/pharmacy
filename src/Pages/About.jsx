import axios from "axios";
import { useLoaderData } from "react-router-dom";
import AboutHead from "../features/About/AboutHead";
import FacultyList from "../features/About/FacultyList";

function About() {
  const data = useLoaderData();
  const head = data.about;
  const faculty = data.departments;

  return (
    <div>
      <AboutHead head={head} />
      <FacultyList faculty={faculty} />
    </div>
  );
}

export default About;

export async function loader() {
  const response = await axios.get("https://pharm-six.vercel.app/api/data");
  const data = await response.data;

  return data;
}
