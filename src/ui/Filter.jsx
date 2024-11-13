import { useSearchParams } from "react-router-dom";
import styles from "../modules/Filter.module.css";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);

    setSearchParams(searchParams);
  }
  return (
    <div className={styles.filter}>
      {options.map((option, index) => (
        <button
          className={`${styles.button} ${
            option.value === currentFilter ? styles.active : ""
          }`}
          disabled={option.value === currentFilter}
          key={index}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;

// const FilterButton = styled.button`
//   background-color: var(--color-grey-0);
//   border: none;

//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--color-brand-600);
//       color: var(--color-brand-50);
//     `}

//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;

// function Filter({ filterField, options }) {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const currentFilter = searchParams.get(filterField) || options.at(0).value;
//   function handleClick(value) {
//     searchParams.set(filterField, value);
//     searchParams.set("page", 1);

//     setSearchParams(searchParams);
//   }
//   return (
//     <div className={styles.filter}>
//       {options.map((option, index) => (
//         <FilterButton
//           active={option.value === currentFilter}
//           disabled={option.value === currentFilter}
//           key={index}
//           onClick={() => handleClick(option.value)}
//         >
//           {option.label}
//         </FilterButton>
//       ))}
//     </div>
//   );
// }

// export default Filter;
