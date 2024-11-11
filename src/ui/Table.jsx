import { createContext } from "react";
import styles from "../modules/Subjects.module.css";
const TableContext = createContext();

function Table({ children, session }) {
  return (
    <TableContext.Provider>
      <h2 className={styles.caption}> {session} Semester</h2>
      <table className={styles.table}>{children}</table>{" "}
      {session?.toLowerCase() === "first" ? (
        <hr className={styles.line} />
      ) : null}
    </TableContext.Provider>
  );
}

export default Table;

function Body({ semester, children, type = "subjects" }) {
  if (type === "subjects")
    return (
      <tbody>
        {semester.map((item) => (
          <tr key={item.id}>
            <td className={styles.hide}>{item.code}</td>
            <td>{item.title}</td>
            <td>{item.units}</td>
            <td>{item.grade}</td>
          </tr>
        ))}
      </tbody>
    );

  if (type === "result") return <tbody>{children}</tbody>;
}

function Head({ array, type = "subjects" }) {
  return (
    <thead>
      <tr>
        {array.map((item, index) => (
          <th
            className={type === "subjects" && index === 0 ? styles.hide : ""}
            key={index}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}

Table.Body = Body;
Table.Head = Head;
