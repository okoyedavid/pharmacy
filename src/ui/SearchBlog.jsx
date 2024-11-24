import styles from "../modules/SearchBlog.module.css";

function SearchBlog() {
  return (
    <>
      <li>
        <input
          placeholder="Search for posts "
          type="text"
          className={styles.input}
        />
      </li>
    </>
  );
}

export default SearchBlog;
