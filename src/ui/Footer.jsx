import styles from "../modules/Footer.module.css";

import instagram from "/contactImg/insta.svg";
import twitter from "/contactImg/twitter.svg";
import tiktok from "/contactImg/tiktok.svg";
import facebook from "/contactImg/facebook.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={styles.header}>Contact us via our social media pages</h3>

        <ul className={styles.contact}>
          <li>
            <a
              target="#"
              href="https://www.instagram.com/pans__esut?igsh=MWZmY2E3ZTNhdXRqag=="
            >
              <img className={styles.social_img} src={instagram} />
            </a>
          </li>
          <li>
            <a target="#" href="https://x.com/pansesut">
              <img className={styles.social_img} src={twitter} />
            </a>
          </li>
          <li>
            <a target="#" href="https://www.tiktok.com/@pans.esut3">
              <img className={styles.social_img} src={tiktok} />
            </a>
          </li>
          <li>
            <a
              target="#"
              href="https://www.facebook.com/share/v/NanjoDwsMKAWovSL/?mibextid=WC7FNe"
            >
              <img className={styles.social_img} src={facebook} />
            </a>
          </li>
        </ul>
      </div>
      <p className={styles.footer_text}>
        &copy; Copyright {new Date().getFullYear()} by Esut Pharmacy faculty
      </p>
    </footer>
  );
}

export default Footer;
