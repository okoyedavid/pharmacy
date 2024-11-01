import { pharmacyLevels } from "../utils/constants";

function Levels({ register }) {
  return (
    <select
      style={{ height: "100%" }}
      name={"level"}
      id="level"
      {...(register ? register("level") : {})}
    >
      {pharmacyLevels.map((item) => (
        <option key={item.class} value={item.class}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default Levels;
