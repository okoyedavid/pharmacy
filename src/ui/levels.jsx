import { fetchConstantValue } from "../utils/constants";

function Levels({ register, ...rest }) {
  const pharmacyLevels = fetchConstantValue("level");

  return (
    <select
      style={{ height: "100%" }}
      name={"level"}
      id="level"
      {...(register ? register("level") : {})}
      {...rest}
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
