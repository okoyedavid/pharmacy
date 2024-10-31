import { useSearchParams } from "react-router-dom";
import Button from "./Button";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  return (
    <div>
      {options.map((option, index) => (
        <Button
          disabled={option.value === currentFilter}
          key={index}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

export default Filter;
