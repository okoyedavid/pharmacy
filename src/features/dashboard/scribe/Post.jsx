import styles from "../../../modules/HealthScribe.module.css";
import WriterInfo from "./WriterInfo";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.blogHead}>
        <h4 className={styles.postTitle}>
          Esut vice chancellor announces osita ezinne as best graduating student
          for 2023/2024 session with a CGPA of 4.88
          <span className={styles.time}>November 16th, 2024. 4:15pm </span>
        </h4>
        <img src="/bg3.jpg" className={styles.blogImage} alt="" />
      </div>

      <WriterInfo />

      <p className={styles.blogPost}>
        The Vice Chancellor of Enugu State University of Science and Technology
        (ESUT) has officially recognized Osita Ezinne as the Best Graduating
        Student for the 2023/2024 academic session. This remarkable achievement
        comes with Ezinne attaining an exceptional Cumulative Grade Point
        Average (CGPA) of 4.88, marking her as a standout scholar in the
        institution’s history. During the announcement, the Vice Chancellor
        commended Osita Ezinne’s dedication, resilience, and hard work
        throughout her academic journey. He described her as an embodiment of
        academic excellence and a role model for aspiring students. “Ezinne’s
        success is a testament to the power of perseverance, focus, and
        determination,” he remarked, urging other students to emulate her
        commitment to excellence. Ezinne, who pursued her studies in [Insert
        Department/Faculty], expressed immense gratitude to the university, her
        lecturers, and her family for their unwavering support. “This
        achievement is not mine alone; it’s a reflection of the guidance,
        opportunities, and encouragement I’ve received from everyone around me,”
        she said during her valedictory speech. She also encouraged her peers to
        remain determined and to never underestimate the value of hard work. Her
        stellar performance places her among the top graduates in ESUT’s
        history, earning her not only academic accolades but also widespread
        admiration. As a role model, Osita Ezinne’s journey is a source of
        inspiration for countless students who aspire to excel academically. The
        ESUT community continues to celebrate her achievement, and her story
        serves as a reminder of the university’s dedication to fostering
        academic excellence and producing globally competitive graduates.
        Congratulations to Osita Ezinne for setting an extraordinary standard of
        excellence!
      </p>
    </div>
  );
}

export default Post;
