import { Link, useSearchParams } from "react-router-dom";
import styles from "../../../modules/HealthScribe.module.css";
function HealthScribe() {
  const [searchParams, setSearchParams] = useSearchParams();

  function viewPost() {
    searchParams.set("id", "23235235435325235235235");
    setSearchParams(searchParams);
  }
  return (
    <div className={styles.scribe}>
      <section className={styles.links}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#"> Home </a>
          </li>
          <li className={styles.navItem}>
            <a href="#">writers </a>
          </li>
          <li className={styles.navItem}>
            <a href="#"> latest articles </a>
          </li>
          <li className={styles.navItem}>
            <a href="#"> elections </a>
          </li>
          <li className={styles.navItem}>
            <a href="#"> Admissions </a>
          </li>
          <li className={styles.navItem}>
            <a href="#"> Dept. information </a>
          </li>
        </ul>
      </section>
      <div className={styles.container}>
        <ul className={styles.postLists}>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024 session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.postItem} onClick={viewPost}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
        </ul>
      </div>
      <section className={styles.articeList}>
        <h3>Latest articles</h3>
        <ul className={styles.articlesList}>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024 session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
          <li className={styles.articleItem}>
            {" "}
            <Link>
              <img src="/bg.jpeg" alt="imageplaceholder" />{" "}
              <h2>
                Esut vc announces osita tracy ezinne as overall best graduating
                student 2023/2024session
              </h2>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HealthScribe;
